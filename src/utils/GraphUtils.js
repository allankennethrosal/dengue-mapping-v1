export const getYears = () => {
  const caseObject = {};
  const d = new Date();
  const todayYear = d.getFullYear() < 2022 ? 2022 : d.getFullYear();

  for (let i = 2014; i <= todayYear; i++) {
    i = i.toString();
    caseObject[i] = 0;
  }

  return caseObject;
};

export const getAnnualCases = dengueData => {
  const annualCases = getYears();

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

export const getAnnualCasesOfMuncity = (muncity, dengueData) => {
  const annualCasesMuncity = getYears();

  // get number of cases per year
  for (const d of dengueData) {
    if (annualCasesMuncity[d.Year] && d.Muncity === muncity) {
      annualCasesMuncity[d.Year] += 1;
    } else if (d.Muncity === muncity) {
      annualCasesMuncity[d.Year] = 1;
    }
  }

  return annualCasesMuncity;
};

export const getMonthlyCases = (muncity, year, dengueData) => {
  const monthlyCases = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0
  };
  const monthNames = Object.keys(monthlyCases);

  // get number of cases per year
  for (const d of dengueData) {
    const date = new Date(d.DAdmit);
    const monthName = monthNames[date.getMonth()];
    if (monthlyCases[monthName] && d.Muncity === muncity && d.Year === year) {
      monthlyCases[monthName] += 1;
    } else if (d.Muncity === muncity && d.Year === year) {
      monthlyCases[monthName] = 1;
    }
  }

  return monthlyCases;
};
