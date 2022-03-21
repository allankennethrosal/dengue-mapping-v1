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
