export const getAnnualCases = dengueData => {
  const annualCases = {};
  const d = new Date();
  const todayYear = d.getFullYear() < 2022 ? 2022 : d.getFullYear();

  for (let i = 2014; i <= todayYear; i++) {
    i = i.toString();
    annualCases[i] = 0;
  }

  // get number of cases per year
  for (const d of dengueData) {
    if (annualCases[d.Year]) {
      annualCases[d.Year] += 1;
    } else {
      annualCases[d.Year] = 1;
    }
  }

  return annualCases;
};
