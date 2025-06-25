import { InputHTMLAttributes, ReactNode } from "preact/compat";

export interface IModal {
  title?: string | ReactNode;
  isOpen?: boolean;
  content?: ReactNode;
  middle?: ReactNode;
  footer?: ReactNode;
}

export interface ICard {
  title: string;
  description: ReactNode | string;
  link: string;
  btnText: ReactNode | string;
  img?: ReactNode;
}

export interface ICenteredHero {
  title: string;
  icon: ReactNode;
}

export type TIconName =
  | "logo"
  | "sourceCode"
  | "linkedin"
  | "whatsapp"
  | "company"
  | "houseVariant"
  | "computer"
  | "react"
  | "paperText"
  | "language"
  | "email"
  | "web"
  | "phone"
  | "about"
  | "clipboardList"
  | "calendar"
  | "formatListBulleted"
  | "link"
  | "filterRemove"
  | "filter"
  | "search";

export interface IIcon {
  name: TIconName;
  color?: string;
  size?: number;
  class?: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  autoCompleteOptions?: string[];
}

export interface ILayout {
  children: ReactNode;
}

export interface ITableData {
  [k: string]: any;
}
