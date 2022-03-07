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

// get the number of cases for each muncity
export const getCases = (dengueData, year) => {
  const casesCount = {};
  const casesPrevious = {};

  if (year === "All") {
    // count all occurences of cases for muncities
    for (const el of dengueData) {
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }

      // get data for latest year
      if (casesPrevious[el.Muncity] && el.Year === "2022") {
        casesPrevious[el.Muncity] += 1;
      } else if (el.Year === "2022") {
        casesPrevious[el.Muncity] = 1;
      }
    }
  } else {
    const yearData = dengueData.filter(
      d => d.Year === year || parseInt(d.Year) === parseInt(year) - 1
    );
    // count occurences of cases for muncities on specific year
    for (const el of yearData) {
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
    }
  }

  return { casesCount, casesPrevious };
};
