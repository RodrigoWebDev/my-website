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

const translateMonths = (locale: TLocale, text: string) => {
  let newText = text;

  if (locale === "pt") {
    newText = text
      .replace("Jan", "Janeiro")
      .replace("Feb", "Fevereiro")
      .replace("Mar", "Março")
      .replace("Apr", "Abril")
      .replace("May", "Maio")
      .replace("Jun", "Junho")
      .replace("Jul", "Julho")
      .replace("Aug", "Agosto")
      .replace("Sep", "Setembro")
      .replace("Oct", "Outubro")
      .replace("Nov", "Novembro")
      .replace("Dec", "Dezembro");
  }

  return newText;
};

export const i18nExperiences = () => {
  const _locale = locale.value as TLocale;
  return experiencesTranslations[_locale].map((item) => {
    return {
      ...item,
      date: translateMonths(_locale, item.date),
    };
  });
};

export const sortBy = (arr: any[], key: string) => {
  return arr.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
