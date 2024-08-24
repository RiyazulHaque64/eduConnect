export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formatedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formatedDate;
};
