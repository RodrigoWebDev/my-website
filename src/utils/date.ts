export const getAge = () => {
  const birthDate = new Date(1997, 2, 11);
  const diff = Date.now() - birthDate.getTime();
  const year = new Date(diff).getUTCFullYear();

  return Math.abs(year - 1970);
};
