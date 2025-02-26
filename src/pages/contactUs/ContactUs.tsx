import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import Instagram from "pages/contactUs/svgIconsSocialNetworks/Instagram";
import Linkedin from "pages/contactUs/svgIconsSocialNetworks/Linkedin";
import Telegram from "pages/contactUs/svgIconsSocialNetworks/Telegram";
import Twitter from "pages/contactUs/svgIconsSocialNetworks/Twitter";
import WhatsApp from "pages/contactUs/svgIconsSocialNetworks/WhatsApp";
import { useTranslation } from "react-i18next";
import classes from "./ContactUs.module.scss";

import email from "assets/images/temporaryImages/email.svg";
import address from "assets/images/temporaryImages/maps-and-location.svg";
import phone from "assets/images/temporaryImages/phone.svg";
import website from "assets/images/temporaryImages/website.svg";
const ContactUs = () => {
  const { t } = useTranslation();
  const social = [
    {
      link: "https:/linkedin.com/in/ferezi",
      icon: <Linkedin />,
    },
    {
      link: "https://api.whatsapp.com/send?phone=989907639716",
      icon: <WhatsApp />,
    },
    {
      link: "https://t.me/ferezi",
      icon: <Telegram />,
    },
    {
      link: "https://instagram.com/ferezi",
      icon: <Instagram />,
    },
    {
      link: "https://mobile.twitter.com/ferezi",
      icon: <Twitter />,
    },
  ];

  return (
    <div>
      <TitleWithUnderline
        title={t("contact Us")}
        className="all-center mt-3 mb-2"
      />

      <div className="w-full all-center flex-col">
        <div className={`${classes.contactUsSection} w-full`}>
          <img src={phone} alt="#" />
          <div className={classes.contactUsTextInfo}>
            <span>{t("Phone")}</span>
            <a href="tel:021-34560000">021-34560000</a>
          </div>
        </div>
        <div className={`${classes.contactUsSection} w-full`}>
          <img src={email} alt="#" />
          <div className={classes.contactUsTextInfo}>
            <span>{t("Email")}</span>
            <a href="mailto:info@ferezi.com">info[at]ferezi[dot]com</a>
          </div>
        </div>
        <div className={`${classes.contactUsSection} w-full`}>
          <img src={website} alt="#" />
          <div className={classes.contactUsTextInfo}>
            <span>{t("Website")}</span>
            <a href="https://ferezi.com">https://ferezi.com</a>
          </div>
        </div>
        <div className={`${classes.contactUsSection} w-full`}>
          <img src={address} alt="#" />
          <div className={classes.contactUsTextInfo}>
            <span>{t("Address")}</span>
            <a href="https://www.google.com/maps/place/Azadi+Tower/@35.6997374,51.3354612,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8dfe05732c2e91:0xfcbec017befd15f4!8m2!3d35.6997331!4d51.3380361!16zL20vMDR4ZHMw?entry=ttu">
              Tehran, Azadi Sq, Davari Blvd , 13
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-auto">
        <div className={classes.socialNetworkContainer}>
          {social.map((item, index) => {
            return (
              <span key={index}>
                <a href={item.link}>
                  <i className="flex self-center"> {item.icon}</i>
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
