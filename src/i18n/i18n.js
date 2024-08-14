import { createI18n } from "vue-i18n";

import en from "./en.json";
import tr from "./tr.json";
import es from "./es.json";
import fr from "./fr.json";
import de from "./de.json";

const messages = {
  en: en,
  tr: tr,
  es: es,
  fr: fr,
  de: de,
};
var lang;
lang = navigator.language.split("-")[0];

export const i18n = createI18n({
  locale: lang,
  fallbackLocale: "en",
  messages: messages,
});
