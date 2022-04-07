import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeMap from "./components/HomeMap";
import Graphs from "./components/Graphs";
import DataTable from "./components/DataTable";
import { getCasesDB, createCaseDB } from "./utils/GlobalUtils";

const data = {
  Muncity: "OZAMIZ",
  Streetpurok: "PUROK 4",
  DateOfEntry: "2022-04-03T16:00:00.000Z",
  DRU: "GOVERNMENT HOSPITAL",
  AgeYears: 69,
  AgeMons: 69,
  AgeDays: 69,
  Sex: "M",
  AddressOfDRU: "UNAHAN SA AMOA",
  ProvOfDRU: "MISAMIS OCCIDENTAL",
  MuncityOfDRU: "OZAMIZ",
  Admitted: 1,
  DAdmit: "2022-04-03T16:00:00.000Z",
  DOnset: "2022-04-03T16:00:00.000Z",
  Type: "A",
  LabRes: "PENDING",
  CaseClassification: "IDK",
  Outcome: "IDK",
  RegionOfDrU: "10",
  EPIID: "IDKASN1231oindasd0194usakdfn230",
  Icd10Code: "IDK",
  MorbidityMonth: 69,
  MorbidityWeek: 69,
  Year: 69,
  NameOfDru: "MHARS GENERAL HOSPITAL",
  ILHZ: "IDK",
  District: "DISTRICT 2",
  Barangay: "IDK"
};

function App() {
  const [cases, setCases] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCasesDB(setCases);
    // createCaseDB(data, setError);
  }, []);
  console.log(cases);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMap />} />
        <Route path="graphs" element={<Graphs />} />
        <Route path="datatable" element={<DataTable />} />
      </Routes>
    </>
  );
}

export default App;
