import FaqComponent from "components/Faq/FaqComponent";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import FAQ from "pages/FAQ/FAQ";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Help = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TitleWithUnderline title={t("help")} className="all-center mt-3 mb-2" />
      <div className="w-full flex-col flex items-center mt-5 text-sm">
        <p className="">{t("You can see your previous orders here.")}</p>
        <Link
          to="/order-list"
          className="fr-primary-button w-[150px] block text-center mt-2 text-sm"
        >
          {t("Order list")}
        </Link>
      </div>
      <div className="w-full flex-col flex items-center mt-5 text-sm">
        <p className="">{t("You can read here about us")} </p>
        <Link
          to="/about-us"
          className="fr-primary-button w-[150px] block text-center mt-2 text-sm"
        >
          {t("about Us")}
        </Link>
      </div>
      <div className="w-full flex-col flex items-center mt-5 text-sm">
        <p className="">
          {t("Need to communicate with us?")} {t("take action from here")}{" "}
        </p>
        <Link
          to="/contact-us"
          className="fr-primary-button w-[150px] block text-center mt-2 text-sm"
        >
          {t("contact Us")}
        </Link>
      </div>
      <div className="mt-5">
        <FAQ />
      </div>
    </div>
  );
};

export default Help;
