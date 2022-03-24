export const searchData = (data, searchText) => {
  return data.filter(d => {
    const attribs = Object.values(d);
    let found = false;

    for (const a of attribs) {
      if (a.toLowerCase().includes(searchText.toLowerCase())) {
        found = true;
        break;
      }
    }

    return found;
  });
};

const compareDates = (date1, date2) => {
  var d1 = Date.parse(date1);
  var d2 = Date.parse(date2);

  return d1 > d2;
};

export const sortData = async (dengueData, sortOrder, sortBy) => {
  if (sortOrder === "ASC") {
    return await dengueData.sort((a, b) => {
      if (sortBy === "AgeYears") {
        const ageA = parseFloat(a.AgeYears);
        const ageB = parseFloat(b.AgeYears);
        return ageA > ageB ? 1 : ageB > ageA ? -1 : 0;
      } else if (sortBy === "DateOfEntry") {
        return compareDates(a.DateOfEntry, b.DateOfEntry)
          ? 1
          : compareDates(b.DateOfEntry, a.DateOfEntry)
          ? -1
          : 0;
      } else if (sortBy === "Muncity") {
        return a.Muncity > b.Muncity ? 1 : b.Muncity > a.Muncity ? -1 : 0;
      } else {
        return compareDates(a.DAdmit, b.DAdmit)
          ? 1
          : compareDates(b.DAdmit, a.DAdmit)
          ? -1
          : 0;
      }
    });
  } else {
    return await dengueData.sort((a, b) => {
      if (sortBy === "AgeYears") {
        const ageA = parseInt(a.AgeYears);
        const ageB = parseInt(b.AgeYears);
        return ageA > ageB ? -1 : ageB > ageA ? 1 : 0;
      } else if (sortBy === "DateOfEntry") {
        return compareDates(a.DateOfEntry, b.DateOfEntry)
          ? -1
          : compareDates(b.DateOfEntry, a.DateOfEntry)
          ? 1
          : 0;
      } else if (sortBy === "Muncity") {
        return a.Muncity > b.Muncity ? -1 : b.Muncity > a.Muncity ? 1 : 0;
      } else {
        return compareDates(a.DAdmit, b.DAdmit)
          ? -1
          : compareDates(b.DAdmit, a.DAdmit)
          ? 1
          : 0;
      }
    });
  }
};
