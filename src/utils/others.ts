import { INavLink } from "../model/other";

export const getNavLink = (item: INavLink) => {
  if (item.route !== undefined) {
    return item.route + window.location.search;
  }

  return item.name + window.location.search;
};
