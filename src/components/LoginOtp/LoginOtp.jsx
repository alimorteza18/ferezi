import MobilePhoneIcon from "assets/icons/MobilePhoneIcon";
import LoadingForButton from "components/loading/LoadingForButton";
import Axios from "middleware/axiosInstance";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import * as Yup from "yup";

const LoginOtp = ({
  pageSection,
  setPageSection,
  setUserIsLogin,
  setModalIsOpen,
}) => {
  const mobileNumberRef = useRef();
  const tLogin = useTranslations("login");
  const tValidation = useTranslations("validationMessage");
  const t = useTranslations("public");

  const [phoneNumber, setPhoneNumber] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  //  -&-&-&- Yup validation form status errors  -&-&-&-
  const [errors, setErrors] = useState({});
  //  -&-&-&- errors for phone wrong or otp wrong  -&-&-&-
  const [customError, setCustomError] = useState({});

  const validationMobileNumberSchema = Yup.number()
    .typeError("pleaseEnterAValidNumber")
    .test("is-at-least-10-digits", "mustBeAtLeast10Character", (value) =>
      value ? value.toString().length >= 10 : false
    )
    .required("thisFieldIsRequired");

  // const validationOTPSchema = Yup.number()
  //   .typeError("pleaseEnterAValidNumber")
  //   .test("is-4-digits", "mustBeExactly4Digits", (value) =>
  //     value ? value.toString().length === 4 : false
  //   )
  //   .required("thisFieldIsRequired");
  const validationOTPSchema = Yup.number()
    .typeError("pleaseEnterAValidNumber")
    .test(
      "is-4-digits",
      "mustBeExactly4Digits",
      (value) => value !== null && value.toString().length === 4
    )
    .required("thisFieldIsRequired");

  useEffect(() => {
    setErrors({});
  }, [phoneNumber]);

  const mobilePhoneChangeHandler = (e) => {
    const mobileNumber = e.target.value;
    if (/^[0-9]{0,11}$/.test(mobileNumber) && mobileNumber.length < 12) {
      setPhoneNumber(mobileNumber);
    }
  };

  const submitMobileNumberHandler = async () => {
    try {
      await validationMobileNumberSchema.validate(phoneNumber, {
        abortEarly: false,
      });
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: undefined }));
      if (pageSection === 1) {
        setIsLoading(true);
      }
      Axios.post("/login", { mobile: phoneNumber, fcm_token: "1" })
        .then((res) => {
          console.log(res);
          setPageSection(2);
          setTime(initialTime);
        })
        .catch((err) => {
          err.response.status === 401
            ? setCustomError({ mobile: "enteredMobileNumberIsWrong" })
            : null;
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: error.message,
      }));
    }
  };
  const submitOtpHandler = async () => {
    try {
      await validationOTPSchema.validate(otpCode, {
        abortEarly: false,
      });
      setErrors((prevErrors) => ({ ...prevErrors, OTP: undefined }));
      setIsLoading(true);
      setCustomError({});

      Axios.post("/credential/confirm", {
        mobile: phoneNumber,
        code: otpCode,
      })
        .then((res) => {
          if (res.data.data.token) {
            const userToken = res.data.data.token;
            localStorage.setItem("test-token", userToken);
            setUserIsLogin !== undefined ? setUserIsLogin(true) : null;
            //  -&-&-&- close  login modal  -&-&-&-
            setModalIsOpen(false);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            setCustomError({ OTP: "enteredNumberIsWrong" });
            setOtpCode("");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setCustomError((prevErrors) => ({
        ...prevErrors,
        OTP: error.message,
      }));
    }
  };
  useEffect(() => {
    // focus on the input mobile when the component mounts
    mobileNumberRef?.current?.focus();
    return () => {
      // remove focus when the component unmounts
      mobileNumberRef?.current?.blur();
    };
  }, []);

  useEffect(() => {
    setCustomError({});
  }, [phoneNumber]);

  //  -&-&-&- auto submit with enter opt code  -&-&-&-
  useEffect(() => {
    if (otpCode.toString().length === 4) submitOtpHandler();
  }, [otpCode]);

  const resendOtpCode = () => {
    setOtpCode("");
    setTime(initialTime);
    submitMobileNumberHandler();
    setIsLoading(false);
  };
  // start timer
  const initialTime = 2 * 60; // initial time in seconds (2 minutes)
  const [time, setTime] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease the time by 1 second
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component unmounts or time reaches 0
    return () => clearInterval(timer);
  }, []);

  // Format the time to MM:SS
  const formatTime = (seconds) => {
    if (time > 0) {
      try {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(
          remainingSeconds
        ).padStart(2, "0")}`;
      } catch {
        return false;
      }
    } else return false;
  };

  return (
    <>
      <div className="mt-[46px]">
        {pageSection === 1 ? (
          <p className="text-base font-bold">
            {tLogin("welcomeMessage")}
            <span className="text-primary-50"> {t("eqar")} </span>
          </p>
        ) : (
          <div className="flex flex-row">
            <p className="text-sm font-normal text-neutral-30">
              {tLogin("YourPhoneNumber")}:
            </p>
            <p className="font-semibold text-neutral-20 text-sm mr-1 ml-2">
              {phoneNumber}
            </p>
            <p
              className="text-primary-50 font-bold text-sm cursor-pointer"
              onClick={() => {
                setPageSection(1);
                setOtpCode("");
                setCustomError({});
              }}
            >
              {tLogin("changePhoneNumber")}
            </p>
          </div>
        )}
      </div>

      <div className="text-sm leading-6 text-neutral-20 font-normal">
        <p className="mt-3 text-neutral-20">
          {pageSection === 1
            ? tLogin("enterYourPhoneNumber")
            : tLogin("pleaseEnterTheCodeSent")}
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pageSection === 1 ? submitMobileNumberHandler() : submitOtpHandler();
        }}
      >
        <div className=" w-full mt-2 h-12 bg-neutral-99 rounded-xl flex items-center flex-row">
          {pageSection === 1 ? (
            <>
              <MobilePhoneIcon className="mr-3 ml-[6px] my-3" />
              <input
                ref={mobileNumberRef}
                type="text"
                className="h-full w-[350px] outline-none bg-neutral-99 text-neutral-10"
                placeholder="07812345678"
                value={phoneNumber}
                onChange={mobilePhoneChangeHandler}
                maxLength={11}
              />
            </>
          ) : (
            <div className="bg-inherit w-full all-center">
              <OTPInput
                value={otpCode}
                onChange={setOtpCode}
                numInputs={4}
                // renderSeparator={<span></span>}
                shouldAutoFocus={true}
                onPaste={true}
                placeholder="----"
                renderInput={(props) => <input {...props} />}
                containerStyle="OtpInputsContainer"
                inputStyle="OtpInputStyle"
                skipDefaultStyles={true}
              />
            </div>
          )}
        </div>
        {
          <p className="eq-form-error-message mt-2">
            {(errors.mobileNumber && tValidation(errors.mobileNumber)) ||
              (customError.mobile && tValidation(customError.mobile)) ||
              (customError.OTP && tValidation(customError.OTP))}
          </p>
        }
        <button
          type="submit"
          className="eq-btn-primary w-full text-base leading-6 mt-4 h-12 bg-primary-50  
            "
          // disabled={
          //   pageSection === 1 && phoneNumber.phoneNumber?.length !== 11
          // }
        >
          {isLoading ? (
            <LoadingForButton />
          ) : pageSection === 1 ? (
            tLogin("requestOTP")
          ) : (
            t("enter")
          )}
        </button>
      </form>
      <div className="mt-3">
        {pageSection === 1 ? (
          <div>
            دخولك يعني قبول{" "}
            <span className="text-secondry-30 cursor-pointer">
              قواعد الخصوصية{" "}
            </span>
            و
            <span className="text-secondry-30 cursor-pointer">
              {" "}
              الشروط والأحكام
            </span>
          </div>
        ) : formatTime(time) ? (
          <p className="text-primary-50 text-[13px] font-bold">
            {`${formatTime(time)} `}
            <span className="font-medium text-neutral-20">
              {tLogin("toResendCode")}
            </span>
          </p>
        ) : (
          <p
            className="text-primary-50 font-bold text-sm cursor-pointer"
            onClick={resendOtpCode}
          >
            {tLogin("sendCodeAgain")}
          </p>
        )}
      </div>
    </>
  );
};

export default LoginOtp;