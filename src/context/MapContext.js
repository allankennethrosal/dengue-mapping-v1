import React, { useState, createContext } from "react";
import dengueData from "../data/dengue-cases-misocc.json";

export const MapContext = createContext();

export const MapProvider = props => {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);
  const [prevYearCase, setPrevYearCase] = useState(0);
  const [ageChildrenCases, setAgeChildrenCases] = useState(0);
  const [ageYouthCases, setAgeYouthCases] = useState(0);
  const [ageAdultsCases, setAgeAdultsCases] = useState(0);
  const [ageSeniorsCases, setAgeSeniorsCases] = useState(0);

  const [ageGroupFilter, setAgeGroupFilter] = useState([
    // true - active, false - inactive
    true, // children
    true, // youth
    true, // adults
    true // seniors
  ]);
  const [genderFilter, setGenderFilter] = useState(
    // true - active, false - inactive
    true, // male
    true // female
  );

  const [mapKey, setMapKey] = useState(Math.random());
  const refreshMap = () => {
    setMapKey(Math.random());
  };

  return (
    <MapContext.Provider
      value={{
        dengueData: dengueData.data,
        prevYearCase,
        setPrevYearCase,
        muncity,
        setMuncity,
        province,
        setProvince,
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
        ageGroupFilter,
        setAgeGroupFilter,
        genderFilter,
        setGenderFilter,
        mapKey,
        refreshMap
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
