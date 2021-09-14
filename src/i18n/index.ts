import { BROWSER_STORAGE_LANGUAGE } from "app-constants/common.constant";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getItem } from "utils/browser-storage.util";

import en from "./en.i18n.json";
import vi from "./vi.i18n.json";

const lng = getItem(BROWSER_STORAGE_LANGUAGE);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, vi },
    lng: lng || "en",
    fallbackLng: lng || "en",
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
