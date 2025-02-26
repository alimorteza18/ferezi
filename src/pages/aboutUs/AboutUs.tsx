import noUserProfileImg from "assets/icons/user-profile-circle.svg";
import logo from "assets/images/logo/logo.png";
import hadiImg from "assets/images/temporaryImages/hadi.png";
import DeveloperProfile from "components/developerProfile/DeveloperProfile";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  const Us = [
    {
      name: t("Dr. Abdolreza Soleymani"),
      position: t("Founder Owner and Chief Executive Officer (CEO)"),
      bio: "",
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
    {
      name: t("Dr. Parsa Madadi Amiri"),
      position: t("Chief Business Development Officer (CBDO)"),
      bio: "",
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
    {
      name: t("Dr. Mahdi Amirpour"),
      position: t("Chief Operating Officer (COO)"),
      bio: "",
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
    {
      name: t("Dr. Saleh Goltabar"),
      position: t("Chief Financial Officer (CFO)"),
      bio: "",
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
  ];

  const developers = [
    {
      name: t("Hadi HeidarNemati"),
      position: t("Project manager and Back-end Developer"),
      bio: t("I think instead of you so you 'll be comfortable"),
      telegram: "https://t.me/hhnemati",
      mail: "h.hnemati@gmail.com",
      img: hadiImg,
    },
   
    {
      name: t("Sepide Jalali"),
      position: t("Designer"),
      bio: "",
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
    {
      name: t("Sajede Azimi"),
      position: t("Content management"),
      bio: t("I am very picky about the words I say and write"),
      telegram: "",
      mail: "",
      img: noUserProfileImg,
    },
  ];
  return (
    <div className="w-full h-auto all-center flex-col mb-5">
      <TitleWithUnderline title={t("about Us")} className="all-center mt-3" />
      <img
        src={logo}
        alt="ferezi-Logo"
        className="w-1/5 h-auto max-h-[25vh] mt-6 fr-sm:mt-7 fr-md:mt-8"
      />
      <h2 className="font-semibold text-xl md:text-2xl underline underline-offset-4 md:underline-offset-[6px]">
        {t("ferezi")}
      </h2>
      <div className="mt-6 fr-sm:mt-7 fr-md:mt-8">
        <p className="text-justify ">
          {t(
            "Ferezi group on..... with slogan Happy K to Smart 12 started its activity."
          )}
          {t(
            "Ferezi application has taken a new step by using the expertise of creative and experienced young people in their field of work using new ideas."
          )}
          {t(
            "The idea of forming Ferezi was sparked by attention to basic nutrition and concern for the healthy nutrition of children."
          )}
          {t(
            "The goal of this project is to provide healthy and basic food packs and snacks for children as soon as possible."
          )}
        </p>
      </div>
      <TitleWithUnderline
        title={t("Organizational roles of team members")}
        className="all-center mt-6"
      />
      <div className="mt-4">
        {Us.map((person) => {
          return (
            <DeveloperProfile
              name={person.name}
              position={person.position}
              bio={person?.bio}
              telegram={person?.telegram}
              mail={person?.mail}
              img={person?.img}
            />
          );
        })}
      </div>
      <TitleWithUnderline
        title={t("Our developer Team")}
        className="all-center mt-4"
      />
      <div className="mt-6">
        {developers.map((developer) => {
          return (
            <DeveloperProfile
              name={developer.name}
              position={developer.position}
              bio={developer.bio}
              telegram={developer.telegram}
              mail={developer.mail}
              img={developer.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
