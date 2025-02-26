import "./Loading.scss";
import defaultLoadingLogo from "../../assets/images/loading/Loading-Dual-Ball.svg";
import { useTranslation } from "react-i18next";
const Loading = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="LoadingBeforeFetchInfo">
      <img className="logo" src={defaultLoadingLogo} alt="logo" />
      <div className="loadingProgressBarContainer mt-4">
        <div className="loadingProgressBar"></div>
      </div>
      <span className="mt-3 text-sm font-bold">{t("loading")}</span>
    </div>
  );
};

export default Loading;
