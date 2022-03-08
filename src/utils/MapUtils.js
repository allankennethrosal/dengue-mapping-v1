// get the range values of all cases on specific years
export const getRanges = (minCasesCount, interval) => {
  const ranges = [];
  const colors = ["#FEF3B2", "#FFE855", "#FFDC00", "#FF8300", "#FF3600"];
  let opacity = 0.2;

  // create ranges
  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      const min = parseFloat(minCasesCount);
      const max = parseFloat(minCasesCount + interval);
      const range = {
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2)),
        opacity: parseFloat(opacity.toFixed(1)),
        color: colors[i]
      };
      ranges.push(range);
      opacity += 0.2;
    } else {
      const min = ranges[ranges.length - 1].max + 1;
      const max = min + interval;
      const range = {
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2)),
        opacity: parseFloat(opacity.toFixed(1)),
        color: colors[i]
      };
      ranges.push(range);
      opacity += 0.2;
    }
  }
  return ranges;
};

// get age group name from age-year value of each data
export const getAgeGroup = ageString => {
  const age = parseInt(ageString);

  if (age >= 0 && age <= 14) {
    return "children";
  } else if (age >= 15 && age <= 24) {
    return "youth";
  } else if (age >= 25 && age <= 64) {
    return "adults";
  } else {
    return "seniors";
  }
};

// get cases from each muncity by age group
const getAgeGroupCases = (casesAgeGroup, el, ageGroupName) => {
  if (casesAgeGroup[el.Muncity]) {
    if (casesAgeGroup[el.Muncity][ageGroupName]) {
      casesAgeGroup[el.Muncity][ageGroupName] += 1;
    } else {
      casesAgeGroup[el.Muncity][ageGroupName] = 1;
    }
  } else {
    casesAgeGroup[el.Muncity] = {
      children: 0,
      youth: 0,
      adults: 0,
      seniors: 0
    };
    casesAgeGroup[el.Muncity][ageGroupName] = 1;
  }
};

// get the number of cases for each muncity
export const getCases = (dengueData, year) => {
  const casesCount = {};
  const casesPrevious = {};
  const casesAgeGroup = {};
  const d = new Date();
  const todayYear = d.getFullYear().toString();

  if (year === "All") {
    for (const el of dengueData) {
      // count all occurences of cases for muncities
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }

      // get data for latest year
      if (casesPrevious[el.Muncity] && el.Year === todayYear) {
        casesPrevious[el.Muncity] += 1;
      } else if (el.Year === todayYear) {
        casesPrevious[el.Muncity] = 1;
      }

      // get data for age group cases
      const ageGroupName = getAgeGroup(el.AgeYears);
      getAgeGroupCases(casesAgeGroup, el, ageGroupName);
    }
  } else {
    const yearData = dengueData.filter(
      d => d.Year === year || parseInt(d.Year) === parseInt(year) - 1
    );
    for (const el of yearData) {
      // count occurences of cases for muncities on specific year
      if (el.Year === year)
        if (casesCount[el.Muncity]) {
          casesCount[el.Muncity] += 1;
        } else {
          casesCount[el.Muncity] = 1;
        }
      else {
        // get data for previous year
        if (casesPrevious[el.Muncity]) {
          casesPrevious[el.Muncity] += 1;
        } else {
          casesPrevious[el.Muncity] = 1;
        }
      }

      // get data for age group cases
      const ageGroupName = getAgeGroup(el.AgeYears);
      if (el.Year === year) {
        getAgeGroupCases(casesAgeGroup, el, ageGroupName);
      }
    }
  }

  return { casesCount, casesPrevious, casesAgeGroup };
};
