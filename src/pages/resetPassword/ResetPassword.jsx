import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Axios from "middleware/axiosInstance";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import YellowButton from "components/formItems/button/yellowButton/YellowButton";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import AppleAnimationIcon from "components/uiAndIcons/appleAnimationIcon/AppleAnimationIcon";

const ResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      code: "",
      new_password: "",
      confirm_password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      if (step === 1) {
        Axios.post("auth/password/reset/request/", { email: values.email })
          .then(() => {
            setEmail(values.email);
            setStep(2);
          })
          .catch((err) => console.error(err))
          .finally(() => setSubmitting(false));
      } else if (step === 2) {
        Axios.post("auth/password/reset/verify/", { email, code: values.code })
          .then(() => {
            setCode(values.code);
            setStep(3);
          })
          .catch((err) => console.error(err))
          .finally(() => setSubmitting(false));
      } else if (step === 3) {
        Axios.post("auth/password/reset/confirm/", {
          email,
          code,
          new_password: values.new_password,
          confirm_password: values.confirm_password,
        })
          .then(() => {
            OpenNotificationWithIcon(
              t("Password Reset Successful"),
              t("You can now log in with your new password")
            );
            navigate("/login");
          })
          .catch((err) => console.error(err))
          .finally(() => setSubmitting(false));
      }
    },
  });

  return (
    <LandingAndSignupWrapper>
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-[290px] md:w-[340px] h-[470px] flex flex-col items-center justify-center">
          <AppleAnimationIcon />
          <h2 className="text-xl font-bold mt-2">{t("Reset Password")}</h2>
          <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-start h-100 gap-2 mt-4 " autoComplete="off">
            {step === 1 && (
              <div className="login-input-box">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Enter your email")}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full"
                />
                <label htmlFor="email">{t("Email")}</label>
              </div>
            )}
            {step === 2 && (
              <div className="login-input-box">
                <input
                  type="text"
                  name="code"
                  placeholder={t("Enter verification code")}
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  className="w-full"
                />
                <label htmlFor="code">{t("Verification Code")}</label>
              </div>
            )}
            {step === 3 && (
              <>
                <div className="login-input-box">
                  <input
                    type="password"
                    name="new_password"
                    placeholder={t("New Password")}
                    value={formik.values.new_password}
                    onChange={formik.handleChange}
                    className="w-full"
                  />
                  <label htmlFor="new_password">{t("New Password")}</label>
                </div>
                <div className="login-input-box">
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder={t("Confirm New Password")}
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    className="w-full"
                  />
                  <label htmlFor="confirm_password">{t("Confirm New Password")}</label>
                </div>
              </>
            )}
            <YellowButton type="submit" name={t("Continue")} loading={formik.isSubmitting} className="w-full h-12 mt-1" />
          </form>
        </div>
      </div>
    </LandingAndSignupWrapper>
  );
};

export default ResetPassword;
