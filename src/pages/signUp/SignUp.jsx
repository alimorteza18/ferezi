import React, { useState } from "react";
import YellowButton from "components/formItems/button/yellowButton/YellowButton";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import { useTranslation } from "react-i18next";
import Axios from "middleware/axiosInstance";
import { useNavigate } from "react-router-dom";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import classes from "./SignUp.module.scss";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [full_name, setFull_Name] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = t("Email is required");
    if (!full_name) tempErrors.full_name = t("full name is required");
    if (!password) tempErrors.password = t("Password is required");
    if (password !== password2) tempErrors.password2 = t("Passwords must match");
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await Axios.post("auth/register/", { email, password, password2, full_name });
      if (response.status === 201) {
        OpenNotificationWithIcon(t("signUp successfully"), t("you signed up successfully"));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("fullname", response.data.fullname);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("verified", response.data.is_verified);
        navigate("/confirm-email");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const serverErrors = err.response.data;
        setErrors(serverErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingAndSignupWrapper>
      <div className={classes.signup}>
        <div className="my-[20px] font-bold text-[20px]">{t("sign up")}</div>
        <form className="flex flex-col items-center justify-start h-100 gap-2 mt-4" onSubmit={handleSubmit}>
          <div className="login-input-box">
            <input
              type="email"
              id="email"
              name="email"
              className={errors.email ? "!border !border-[#FF585A]" : ""}
              placeholder="test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">{t("Email")}</label>
          </div>
          {errors.email && <p className="validation-error-message">{errors.email}</p>}
          <div className="login-input-box">
            <input
              type="text"
              id="full_name"
              name="full_name"
              className={errors.full_name ? "!border !border-[#FF585A]" : ""}
              placeholder="Your Full Name"
              value={full_name}
              onChange={(e) => setFull_Name(e.target.value)}
            />
            <label htmlFor="full_name">{t("Full Name")}</label>
          </div>
          {errors.full_name && <p className="validation-error-message">{errors.full_name}</p>}
          <div className="login-input-box">
            <input
              type="password"
              id="password"
              name="password"
              className={errors.password ? "border border-[#FF585A]" : ""}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">{t("Password")}</label>
          </div>
          {errors.password && <p className="validation-error-message">{errors.password}</p>}

          <div className="login-input-box">
            <input
              type="password"
              id="password2"
              name="password2"
              className={errors.password2 ? "border border-[#FF585A]" : ""}
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label htmlFor="password2">{t("Confirm Password")}</label>
          </div>
          {errors.password2 && <p className="validation-error-message">{errors.password2}</p>}

          <YellowButton
            loading={loading}
            type="submit"
            name={t("Sign Up")}
            className="w-full h-12 mt-1"
          />
        </form>
        <p className="text-sm mt-4">Do You Have a Account? <span onClick={() => {navigate('/login')}} className="font-bold text-[#FBBB23] cursor-pointer">Login</span></p>
      </div>
    </LandingAndSignupWrapper>
  );
};

export default SignUp;
