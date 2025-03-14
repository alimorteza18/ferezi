// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles

// Import Swiper styles
import classes from "./LandingPage.module.scss";
import { useTranslation } from "react-i18next";
import LandingAndSignupWrapper from "layouts/landingAndSignupWrapper/LandingAndSignupWrapper";
import { Link, useNavigate } from "react-router-dom";
import Rate from "components/landingPageComponents/Rate";
import Wave from "components/landingPageComponents/Wave";
import Pack from "components/landingPageComponents/Pack";
import { useState } from "react";





const LandingPage = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <LandingAndSignupWrapper>
      {step === 1 && (
        <div className="flex justify-center items-center flex-col pb-8 pt-8">
          <img src="/l1.svg" alt="" />
          <p className="text-[18px] font-semibold text-[#FEA386] mt-6">What makes FEREZI unique?</p>
          <p className="text-[16px] font-medium text-center mt-2">FEREZI's goal is healthy nutrition for children.</p>
          <p className="text-[14px] font-light text-center mt-2">FEREZI's web application allows you to have a pack of healthy and fresh food with one click.</p>
          <button onClick={handleNext} className="outline-none bg-[#FBBB23] py-2 px-10 rounded-lg font-medium text-[21px] shadow-lg mt-6 cursor-pointer">
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="flex justify-center items-center flex-col pb-8 pt-8">
          <img src="/l2.png" alt="" />
          <p className="text-[16px] font-medium text-center mt-6">Fresh and healthy food</p>
          <p className="text-[16px] font-medium text-center mt-1">with</p>
          <p className="text-[16px] font-medium text-center mt-1">high nutritional value</p>
          <button onClick={handleNext} className="outline-none bg-[#FBBB23] py-2 px-10 rounded-lg font-medium text-[21px] shadow-lg mt-6 cursor-pointer">
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="flex justify-center items-center flex-col pb-8 pt-8">
          <img src="/l3.svg" alt="" />
          <p className="text-[16px] font-medium text-center mt-6">Healthy nutrition according to</p>
          <p className="text-[16px] font-medium text-center mt-1">daily calories requirement</p>
          <p className="text-[16px] font-bold text-center mt-1">based on BMI</p>
          <button onClick={() => {navigate('/sign-up')}} className="outline-none bg-[#FBBB23] py-2 px-10 rounded-lg font-medium text-[21px] shadow-lg mt-6 cursor-pointer">
            Next
          </button>
        </div>
      )}
    </LandingAndSignupWrapper>
  );
};
export default LandingPage;
