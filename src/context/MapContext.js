import React, { useState, createContext } from "react";
import dengueData from "../data/dengue-cases-misocc.json";

export const MapContext = createContext();

export const MapProvider = props => {
  const [muncity, setMuncity] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("All");
  const [muncityCasesCount, setMuncityCasesCount] = useState(0);
  const [activeData, setActiveData] = useState([]);
  const [prevYearCase, setPrevYearCase] = useState(0);
  const [ageGroupCases, setAgeGroupCases] = useState({
    children: 0,
    youth: 0,
    adults: 0,
    seniors: 0
  });
  const [genderCases, setGenderCases] = useState({ male: 0, female: 0 });

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
        activeData,
        setActiveData,
        prevYearCase,
        setPrevYearCase,
        // muncityData,
        // setMuncityData,
        mapFilters,
        setMapFilters,
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

// const [muncityData, setMuncityData] = useState({
//   ALORAN: {
//     cases: 0,
//     previousCases: 0,
//     ageGroupCases: {
//       children: 0, youth: 0, adults: 0, seniors: 0
//     }
//   },
//   BALIANGAO: {},
//   BONIFACIO: {},
//   CALAMBA: {},
//   CLARIN: {},
//   CONCEPCION: {},
//   "DON VICTORIANO CHIONGBIAN": {},
//   JIMENEZ: {},
//   "LOPEZ JAENA": {},
//   "OROQUIETA CITY": {},
//   "OZAMIS CITY": {},
//   PANAON: {},
//   PLARIDEL: {},
//   "SAPANG DALAGA": {},
//   SINACABAN: {},
//   "TANGUB CITY": {},
//   TUDELA: {}
// });
