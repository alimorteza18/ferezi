import FaqComponent from "components/Faq/FaqComponent";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div>
      <TitleWithUnderline
        title={t("Frequently Asked Questions")}
        className="all-center mt-3 mb-6"
      />
      <FaqComponent />
    </div>
  );
};
export default FAQ;
