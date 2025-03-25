const locales = {
  pt: {
    chooseYourLanguage: "Escolha seu idioma",
    frontEndDeveloper: "Desenvolvedor Frontend",
  },
  en: {
    chooseYourLanguage: "Choose your language",
    frontEndDeveloper: "Frontend Developer",
  },
} as const;

export type TLocale = typeof locales;

export default locales;
