import notFoundIcon from "assets/icons/errors/notFound.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-screen space-y-5 flex flex-col justify-center items-center bg-[#FEA386] text-center">
      <h1 className="text-[66px] font-bold">{t("Ooops!")}</h1>
      <img src={notFoundIcon} className="w-28 " alt="error-icon" />
      <div>
        <h2 className="text-5xl font-bold">{t("404")}</h2>
        <h2 className="text-3xl font-bold">{t("ERROR")}</h2>
        <h3 className="text-lg font-semibold">{t("Page Not Found")}</h3>
      </div>
      <h3 className="w-[250px] font-semibold">{t("Sorry about this problem but don’t worry you will find your way back again")}</h3>
      <div onClick={goBackToHome} className="bg-white cursor-pointer flex justify-center items-center px-11 py-3 rounded-[10px]">
        <p className="font-semibold">
        {t("Go Back To Home")}
        </p>
      </div>
    </div>
  );
};
export default NotFound;