import React, { useState, createContext } from "react";

export const TableContext = createContext();

export const TableProvider = props => {
  const [addModalData, setAddModalData] = useState({
    Region: "10",
    Province: "MISAMIS OCCIDENTAL",
    Muncity: "",
    Streetpurok: "",
    DateOfEntry: "",
    DRU: "",
    AgeYears: "",
    AgeMons: "",
    AgeDays: "",
    Sex: "",
    AddressOfDRU: "",
    ProvOfDRU: "",
    MuncityOfDRU: "",
    Admitted: "",
    DAdmit: "",
    DOnset: "",
    Type: "",
    LabRes: "",
    CaseClassification: "",
    Outcome: "",
    RegionOfDrU: "",
    EPIID: "",
    Icd10Code: "",
    MorbidityMonth: "",
    MorbidityWeek: "",
    Year: "",
    NameOfDru: "",
    ILHZ: "",
    District: "",
    Barangay: "",
    Lat: 8.143329652254984,
    Lng: 123.84247183799745
  });

  return (
    <TableContext.Provider
      value={{
        addModalData,
        setAddModalData
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
