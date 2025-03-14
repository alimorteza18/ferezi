// ***** use for set token in headers request to api ******
//                     ************
import axios from "axios";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
const baseURL = "https://admin.ferezi.com/api";

const Axios = axios.create({
  baseURL,
  // timeout: 15000,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
});

Axios.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    const isLoggedIn = token ? true : false;
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // add auth header with jwt if account is logged in and request is to the api url
      ...(isLoggedIn && {
        Authorization: `Bearer ${token}`,
      }),
    };
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(undefined, async (response) => {
  // if token expired
  console.log(response);
  if (response.response.status === 401) {
    // alert("توکن شما منقضی شده، نیاز است تا مجددا وارد شوید!");
    await OpenNotificationWithIcon(
      "خطا",
      " توکن شما منقضی شده، نیاز است تا مجددا وارد شوید!",
      "error"
    );
    localStorage.clear();
    window.location.href = "/login";
  }

  //  if some required fields not filled or Unexpected error
  if (response.response.status === 422) {
    try {
      // start map on object
      const objectMap = (obj, fn) =>
        Object.fromEntries(
          Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
        );
      // end of map on object
      objectMap(response.response.data.message, (v) =>
        OpenNotificationWithIcon("خطا", v[0], "error")
      );
    } catch {
      alert("درخواست با خطا مواجه شد");
    }
  }
  return Promise.reject(response);
});

export default Axios;
