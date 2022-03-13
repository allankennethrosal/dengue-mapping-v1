import React, { createContext } from "react";
import dengueData from "../data/dengue-cases-misocc.json";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const listMuncities = {};

  for (const d of dengueData.data) {
    if (!listMuncities[d.Muncity]) {
      listMuncities[d.Muncity] = 1;
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        dengueData: dengueData.data,
        listMuncities: Object.keys(listMuncities).sort()
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
