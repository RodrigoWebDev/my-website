export const getPagination = ({
  arr,
  page,
  itemsPerPage,
}: {
  arr: any[];
  page: number;
  itemsPerPage: number;
}) => {
  if (page > 0) {
    return arr.slice(itemsPerPage * page, itemsPerPage + itemsPerPage * page);
  } else {
    return arr.slice(0, itemsPerPage);
  }
};
