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

export const compareDates = (date1, date2) => {
  var d1 = Date.parse(date1);
  var d2 = Date.parse(date2);

  return d1 > d2;
};

export const sortData = async (dengueData, sortOrder, sortBy) => {
  const order1 = sortOrder === "ASC" ? 1 : -1;
  const order2 = sortOrder === "DESC" ? 1 : -1;

  return await dengueData.sort((a, b) => {
    if (sortBy === "AgeYears") {
      const ageA = parseFloat(a.AgeDays);
      const ageB = parseFloat(b.AgeDays);
      return ageA > ageB ? order1 : ageB > ageA ? order2 : 0;
    } else if (sortBy === "DateOfEntry") {
      return compareDates(a.DateOfEntry, b.DateOfEntry)
        ? order1
        : compareDates(b.DateOfEntry, a.DateOfEntry)
        ? order2
        : 0;
    } else if (sortBy === "Muncity") {
      return a.Muncity > b.Muncity
        ? order1
        : b.Muncity > a.Muncity
        ? order2
        : 0;
    } else {
      return compareDates(a.DAdmit, b.DAdmit)
        ? order1
        : compareDates(b.DAdmit, a.DAdmit)
        ? order2
        : 0;
    }
  });
};

export const filterData = (data, year, muncity) => {
  if (year === "ALL" && muncity === "ALL") {
    return data;
  } else if (year === "ALL") {
    return data.filter(d => {
      return muncity === d.Muncity;
    });
  } else if (muncity === "ALL") {
    return data.filter(d => {
      return parseInt(year) === new Date(d.DAdmit).getFullYear();
    });
  } else {
    return data.filter(d => {
      return (
        parseInt(year) === new Date(d.DAdmit).getFullYear() &&
        muncity === d.Muncity
      );
    });
  }
};
