import { TLocale, locale } from "../main";
import translations from "../data/translations.json";
import experiencesTranslations from "../data/experiencesTranslations.json";

export const isOddNumber = (n: number) => n % 2;

export const getSearchParam = (param: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const paramValue = searchParams.get(param);
  return paramValue;
};

export const i18n = (key: string) => {
  const _locale = locale.value as TLocale;

  //@ts-ignore
  return translations[_locale][key];
};

export const i18nExperiences = () => {
  const _locale = locale.value as TLocale;
  return experiencesTranslations[_locale];
};
