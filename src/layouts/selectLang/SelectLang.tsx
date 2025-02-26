import { ReactComponent as ChangeLangIcon } from "assets/icons/earth.svg";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./SelectLanguage.scss";
const SelectLang = () => {
  // start hide LnagOptions of click outside of ul
  const containerRef = useRef<HTMLDivElement | null>(null); // Specify the type here
  // const selectLangRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowLangOptions(false);
        // document.activeElement?.blur()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // end of hide LnagOptions of click outside of ul

  const [showLnagOptions, setShowLangOptions] = useState(false);
  const { i18n } = useTranslation();
  const languages = [
    {
      id: 0,
      name: "فارسی",
      tag: "fa",
      title: "فِرِزی | غذای سالم",
      description: "",
    },
    {
      id: 1,
      name: "العربية",
      tag: "ar",
      title: "فِرِزی | الطعام الصحي",
      description: "",
    },
    {
      id: 2,
      name: "English",
      tag: "en",
      title: "ferezi | healthy food",
      description: "",
    },
  ];

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event);
    const lang = i18n.language;
    console.log(languages);
    // set direction
    let textDirection = "ltr";

    if (i18n.language === "fa" || i18n.language === "ar") {
      textDirection = "rtl";
    }
    // set title for browser tab

    const indexOfLang = languages.findIndex((obj) => obj.tag === lang);
    document.title = languages[indexOfLang].title;

    document.documentElement.setAttribute("dir", textDirection);
    document.documentElement.setAttribute("lang", i18n.language);

    // save user selected language
    localStorage.setItem("selected-lang", languages[indexOfLang].tag);
  };

  const toggleShowLangOptions = () => {
    // (containerRef as HTMLElement).blur();
    setShowLangOptions(!showLnagOptions);
  };
  return (
    <div className="select-lang-container flex justify-center">
      <div
        className="select-lang-wrapper"
        ref={containerRef}
        onClick={() => toggleShowLangOptions()}
      >
        <ChangeLangIcon />
        {
          // showLnagOptions === true
          //   ? null
          //   :
          //  --- show selected lang (map on object insted array ) ---
          languages[languages.findIndex((obj) => obj.tag === i18n.language)]
            .name
        }
        <ul
          className={`select-language-bar  ${
            showLnagOptions ? "show-select-language-bar" : ""
          }`}
        >
          {languages.map((language) => {
            return (
              <li
                key={language.id}
                className="lang-item"
                onClick={() => changeLanguage(language.tag)}
              >
                {language.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectLang;
