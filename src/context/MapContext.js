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
  const [genderMaleCases, setGenderMaleCases] = useState(0);
  const [genderFemaleCases, setGenderFemaleCases] = useState(0);

  const [mapFilters, setMapFilters] = useState({
    year: "All", // All - "2014-2020"
    ageGroup: [
      // true - active, false - inactive
      true, // children
      true, // youth
      true, // adults
      true // seniors
    ],
    gender: [
      // true - active, false - inactive
      true, // male
      true // female
    ]
  });

  return (
    <MapContext.Provider
      value={{
        dengueData: dengueData.data,
        prevYearCase,
        setPrevYearCase,
        mapFilters,
        setMapFilters,
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
        genderMaleCases,
        setGenderMaleCases,
        genderFemaleCases,
        setGenderFemaleCases
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
