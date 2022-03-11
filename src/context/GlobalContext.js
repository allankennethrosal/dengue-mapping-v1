import React, { createContext } from "react";
import dengueData from "../data/dengue-cases-misocc.json";

export const GlobalContext = createContext();

export const MapFilterProvider = props => {
  return (
    <GlobalContext.Provider
      value={{
        dengueData: dengueData.data
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
