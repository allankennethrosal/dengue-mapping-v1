import React, { createContext, useState, useEffect } from "react";
import dengueData from "../data/dengue-cases-misocc.json";
import { getCasesDB } from "../utils/GlobalUtils";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const listMuncities = {};
  const [dbData, setDbData] = useState(null);

  useEffect(() => {
    getCasesDB(setDbData);
  }, []);

  for (const d of dengueData.data) {
    if (!listMuncities[d.Muncity]) {
      listMuncities[d.Muncity] = 1;
    }
  }

  return (
    dbData && (
      <GlobalContext.Provider
        value={{
          dengueData: dengueData.data.concat(dbData.data),
          listMuncities: Object.keys(listMuncities).sort()
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    )
  );
};
