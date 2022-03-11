import React, { useState, createContext } from "react";

export const MapContext = createContext();

export const MapProvider = props => {
  const [year, setYear] = useState("All");
  const [muncity, setMuncity] = useState("");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);
  const [prevYearCase, setPrevYearCase] = useState(0);
  const [ageChildrenCases, setAgeChildrenCases] = useState(0);
  const [ageYouthCases, setAgeYouthCases] = useState(0);
  const [ageAdultsCases, setAgeAdultsCases] = useState(0);
  const [ageSeniorsCases, setAgeSeniorsCases] = useState(0);
  const [mapKey, setMapKey] = useState(Math.random());
  const refreshMap = () => {
    setMapKey(Math.random());
  };

  return (
    <MapContext.Provider
      value={{
        prevYearCase,
        setPrevYearCase,
        muncity,
        setMuncity,
        year,
        setYear,
        muncityCasesCount,
        setMuncityCasesCount,
        ageChildrenCases,
        ageYouthCases,
        ageAdultsCases,
        ageSeniorsCases,
        setAgeChildrenCases,
        setAgeYouthCases,
        setAgeAdultsCases,
        setAgeSeniorsCases,
        mapKey,
        refreshMap
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
