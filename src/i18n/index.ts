import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.i18n";
import vi from "./vi.i18n";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, vi },
    lng: "en",
    fallbackLng: "en",
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
