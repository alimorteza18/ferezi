import closeEye from "assets/images/eye-close-white.svg";
import openEye from "assets/images/eye-open-white.svg";
import YellowButton from "components/formItems/button/yellowButton/YellowButton";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import AppleAnimationIcon from "components/uiAndIcons/appleAnimationIcon/AppleAnimationIcon";
import { useFormik } from "formik";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import Axios from "middleware/axiosInstance";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { loginValidationSchema } from "validation/loginValidation";
import "./login.scss";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, { setSubmitting, setErrors }) => {
      Axios.post("auth/login/", values)
        .then((res) => {
          if (res.status === 200) {
            OpenNotificationWithIcon(
              t("login successful"),
              t("you have logged in successfully")
            );
            localStorage.setItem("token", res.data.access);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("fullname", res.data.fullname);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("refresh", res.data.refresh);
            localStorage.setItem("username", res.data.username);
            navigate("/");
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            const serverErrors = err.response.data;
            const errors = {};
            if (serverErrors.email) {
              errors.email = serverErrors.email[0];
            }
            if (serverErrors.password) {
              errors.password = serverErrors.password[0];
            }
            if (serverErrors.detail) {
              errors.password = serverErrors.detail;
              console.log(serverErrors.detail);
            }
            setErrors(errors);
          } else {
            console.error("Unexpected error:", err);
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <LandingAndSignupWrapper>
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-[290px] md:w-[340px] h-[470px] flex flex-col items-center justify-center">
          <AppleAnimationIcon />
          <h2 className="text-xl font-bold mt-2">{t("login")}</h2>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-start h-100 gap-2 mt-4 "
            autoComplete="off"
          >
            <div className="login-input-box">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="test@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? "!border !border-[#FF585A]"
                    : ""
                }
              />
              <label htmlFor="email">{t("userName")}</label>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="validation-error-message">{formik.errors.email}</p>
            ) : null}

            <div className="login-input-box">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.password && formik.errors.password
                    ? "border border-[#FF585A]"
                    : ""
                }
              />
              <label htmlFor="password">{t("password")}</label>
              <img
                src={showPassword ? closeEye : openEye}
                className="show-hide-password-icon"
                onClick={() => setShowPassword(!showPassword)}
                alt="icon"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="validation-error-message">
                {formik.errors.password}
              </p>
            ) : null}

            <YellowButton
              loading={formik.isSubmitting} // Use Formik's isSubmitting state
              type="submit"
              name={t("login")}
              className="w-full h-12 mt-1"
            />
          </form>
          <div className="flex flex-row w-full justify-center mt-5 text-[14px]">
            <p className="">{t("If you are new?")}</p>
            <Link className="mx-1 underline" to="/sign-up">
              {t("create now")}
            </Link>
          </div>
        </div>
      </div>
    </LandingAndSignupWrapper>
  );
};

export default Login;
