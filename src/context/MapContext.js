import React, { useState, createContext } from "react";
import dengueData from "../data/dengue-cases-misocc.json";

export const MapContext = createContext();

export const MapProvider = props => {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);

  return (
    <MapContext.Provider
      value={{
        dengueData: dengueData.data,
        muncity,
        setMuncity,
        province,
        setProvince,
        year,
        setYear,
        muncityCasesCount,
        setMuncityCasesCount
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
