// get the range values of all cases on specific years
export const getRanges = (minCasesCount, interval) => {
  const ranges = [];
  const colors = ["#ccc", "#ffffe0", "#ffae42", "#FFA500", "#ff0000"];
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
  if (year === "All") {
    // count all occurences of cases for muncities
    for (const el of dengueData) {
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }
    }
  } else {
    const yearData = dengueData.filter(
      d => d.DateOfEntry.split("/")[2] === year[2] + year[3]
    );
    // count occurences of cases for muncities on specific year
    for (const el of yearData) {
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }
    }
  }

  return casesCount;
};
