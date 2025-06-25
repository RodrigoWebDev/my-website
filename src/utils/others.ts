import { INavLink } from "../model/other";
import update from "immutability-helper";

export const getNavLink = (item: INavLink) => {
  if (item.route !== undefined) {
    return item.route + window.location.search;
  }

  return item.name + window.location.search;
};

export const dndMove = (arr: any[], dragIndex: number, hoverIndex: number) => {
  const prevItems = [...arr];

  const newItems = update(prevItems, {
    $splice: [
      [dragIndex, 1],
      [hoverIndex, 0, prevItems[dragIndex] as any],
    ],
  });

  return newItems;
};
