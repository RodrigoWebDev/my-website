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

export const convertStringArrayToValueLabelArray = (arr: string[]) => {
  return arr.map((item) => ({
    //@ts-ignore
    value: item.trim().replaceAll(" ", "_").toLowerCase(),
    label: item,
  }));
};
