import internalErrorIcon from "assets/icons/errors/internalError.svg";
import { useTranslation } from "react-i18next";

const InternalError = () => {
  const { t } = useTranslation();
  return (
    <div className="w-100 h-screen all-center flex-col bg-[#FEA386] text-center">
      <h1>{t("oops")}</h1>
      <img src={internalErrorIcon} alt="error-icon" />
      <h2>{t("error500")}</h2>
      <h3>{t("InternalServerError")}</h3>
      <h3>{t("descriptionForError500")}</h3>
      <div className="bg-white px-5 py-3 rounded-[10px]">
        {t("go to previous page")}
      </div>
    </div>
  );
};
export default InternalError;
