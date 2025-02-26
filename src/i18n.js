// i18n.js
import i18n, { dir } from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations for different languages
import translationEN from "locales/en.json"; // english
import translationAR from "locales/ar.json"; // arabic
import translationFA from "locales/fa.json"; // farsi

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

// Get the previously selected language from localStorage
const userLang = () => {
  try {
    const lang = localStorage.getItem("selected-lang");
    // if exist get from localstorage
    if (lang === "en" || lang === "ar" || lang === "fa") {
      let textDirection = "ltr";

      if (lang === "fa" || lang === "ar") {
        textDirection = "rtl";
      }
      // set title for browser tab
      const indexOfLang = languages.findIndex((obj) => obj.tag === lang);
      document.title = languages[indexOfLang].title;
      document.documentElement.setAttribute("dir", textDirection);
      document.documentElement.setAttribute("lang", lang);
      return lang;
      // else return en as default lang
    } else return "en";
  } catch {
    return "en";
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
    fa: {
      translation: translationFA,
    },
    // Add resources for other languages here
  },
  lng: userLang(), // Default language

  fallbackLng: "en", // Fallback language
  // debug: true, // Enable debug mode for development
  interpolation: {
    escapeValue: false, // React escapes by default
  },
});

export default i18n;
