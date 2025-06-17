import translations from "../data/translations.json";
import experiencesTranslations from "../data/experiencesTranslations.json";
import { TLocale } from "../model/locale";
import { getSearchParam } from "../utils/url";
import { signal } from "@preact/signals";
import { route } from "preact-router";

export const locale = signal<TLocale>("pt");

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

export const updateLocaleState = () => {
  const localeParam = getSearchParam("locale") as TLocale;

  locale.value = localeParam || "pt";
};

export const updateLocaleSearchParam = (e: any) => {
  const searchParams = new URLSearchParams(window.location.search);
  //@ts-ignore
  const value = e?.target?.value as TLocale;
  searchParams.set("locale", value);

  route(window.location.pathname + "?" + searchParams.toString());
};
