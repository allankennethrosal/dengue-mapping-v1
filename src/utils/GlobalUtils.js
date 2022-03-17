export const formatDate = rawDate => {
  return new Date(rawDate).toLocaleDateString(
    {},
    { timeZone: "UTC", month: "long", day: "2-digit", year: "numeric" }
  );
};
