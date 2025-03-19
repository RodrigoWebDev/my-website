const locales = {
  pt: {
    chooseYourLanguage: "Escolha seu idioma",
  },
  en: {
    chooseYourLanguage: "Choose your language",
  },
} as const;

export type TLocale = typeof locales;

export default locales;
