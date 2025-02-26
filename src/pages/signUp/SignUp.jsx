import YellowButton from "components/formItems/button/yellowButton/YellowButton";
import { useFormik } from "formik";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import { useTranslation } from "react-i18next";
import classes from "./SignUp.module.scss";

import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import AppleAnimationIcon from "components/uiAndIcons/appleAnimationIcon/AppleAnimationIcon";
import Axios from "middleware/axiosInstance";
import { useNavigate } from "react-router-dom";
import { signUpValidationSchema } from "validation/signupValidation";
import { useState } from "react";

const SignUp = () => {
  const [principal, setpPrincipal] = useState("false");

  const navigate = useNavigate();

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
      username: "",
      principal: "false",
    },
    validationSchema: signUpValidationSchema, // Use the imported validation schema
    onSubmit: (values, { setSubmitting, setErrors }) => {
      Axios.post("auth/register/", values)
        .then((res) => {
          if (res.status === 201) {
            OpenNotificationWithIcon(
              t("signUp successfully"),
              t("you signed up successfully")
            );
            // Axios.post(
            //   "account/activate_account/",
            //   { code: 55555 },
            //   {
            //     headers: {
            //       Authorization: `Bearer ${res.data.token}`,
            //     },
            //   }
            // ).then(res => {
            //   OpenNotificationWithIcon(
            //     t("activation successful"),
            //     t("your account actived successfully")
            //   );
            // })
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("fullname", res.data.fullname);
            localStorage.setItem("id", res.data.id);
            // localStorage.setItem("refresh", res.data.refresh);
            localStorage.setItem("username", res.data.username);
            if (values.principal === "true") {
              window.location.href = "https://ferezi.runflare.run/admin";
            } else {
              navigate("/");
            }
          }
        })
        .catch((err) => {
          // error in register items
          if (err.response && err.response.status === 400) {
            const serverErrors = err.response.data;
            // Map server errors to Formik fields
            const errors = {};
            if (serverErrors.email) {
              errors.email = serverErrors.email[0];
            }
            if (serverErrors.password) {
              errors.password = serverErrors.password[0];
            }
            if (serverErrors.password2) {
              errors.password2 = serverErrors.password2[0];
            }
            if (serverErrors.username) {
              errors.username = serverErrors.username[0];
            }
            setErrors(errors); // Set the errors in Formik
          }
          console.error(err);
        })
        .finally(() => {
          setSubmitting(false); // Stop the submitting state after submission
        });
    },
  });

  return (
    <LandingAndSignupWrapper>
      <div className={classes.signup}>
        <AppleAnimationIcon />
        <div className="my-[20px] font-bold text-[20px]">{t("sign up")}</div>
        <form
          className="flex flex-col items-center justify-start h-100 gap-2 mt-4 "
          onSubmit={formik.handleSubmit}
        >
          <div className="login-input-box">
            <input
              type="email"
              id="email"
              name="email"
              className={formik.errors.email ? "!border !border-[#FF585A]" : ""}
              placeholder="test@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="email">{t("Email")}</label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="validation-error-message"> {formik.errors.email}</p>
          ) : null}
          <div className="login-input-box">
            <input
              type="password"
              id="password"
              name="password"
              className={
                formik.touched.password && formik.errors.password
                  ? "border border-[#FF585A]"
                  : ""
              }
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="password">{t("Password")}</label>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="validation-error-message">{formik.errors.password}</p>
          ) : null}
          <div className="login-input-box">
            <input
              type="password"
              id="password2"
              name="password2"
              className={
                formik.touched.password2 && formik.errors.password2
                  ? "border border-[#FF585A]"
                  : ""
              }
              placeholder="Confirm Password"
              value={formik.values.password2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="password2">{t("Confirm Password")}</label>
          </div>
          {formik.touched.password2 && formik.errors.password2 ? (
            <p className="validation-error-message">
              {formik.errors.password2}
            </p>
          ) : null}
          <div className="login-input-box">
            <input
              type="text"
              id="username"
              name="username"
              className={
                formik.touched.username && formik.errors.username
                  ? "border border-[#FF585A]"
                  : ""
              }
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="username">{t("Username")}</label>
          </div>
          <div className="flex w-full space-x-2 items-center">
            <input
              type="checkbox"
              id="principal"
              name="principal"
              value={formik.values.principal}
              checked={formik.values.principal === "true"}
              onChange={(e) => formik.handleChange({
                target: {
                  name: "principal",
                  value: e.target.checked ? "true" : "false",
                },
              })}
              className="w-4 h-4"
            />
            <label htmlFor="principal">{t("principal")}</label>
          </div>
          <p className="validation-error-message">
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </p>
          <YellowButton
            loading={formik.isSubmitting} // Use formik's isSubmitting state
            type="submit"
            name={t("Sign Up")}
            className="w-full h-12 mt-1"
          />
        </form>
      </div>
    </LandingAndSignupWrapper>
  );
};

export default SignUp;
