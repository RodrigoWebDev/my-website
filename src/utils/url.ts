export const getSearchParam = (param: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const paramValue = searchParams.get(param);
  return paramValue;
};
