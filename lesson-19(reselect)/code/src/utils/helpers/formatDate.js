export const formatDate = (date) => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month + 1}-${day < 9 ? "0" + day : day}`;
};
