import locales, { TLocale } from "../locales";

export const getUrlSearch = () => {
  return window.location.search.replace("?language=", "") || "en";
};

export const getLocale = (
  locale: "en" | "pt",
  key: keyof TLocale["pt"] | keyof TLocale["en"]
) => {
  const text = locales[locale][key];

  return text;
};
