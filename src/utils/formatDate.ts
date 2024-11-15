export const formatDate = (date: Date) => {
  const newDate = Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  return newDate;
};
