import axios from "axios";

const ENDPOINT_DEV = "http://localhost/dengue-monitor";
const ENDPOINT_PROD = "https://dengue-monitor.000webhostapp.com";
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

export const getCasesDB = setCases => {
  axios
    .get(ENDPOINT_DEV + "/api/retrieve.php")
    .then(response => {
      // handle success
      setCases(response.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
      setCases(null);
    })
    .then(() => {
      // always executed
    });
};

export const createCaseDB = (data, setError) => {
  axios
    .post(ENDPOINT_DEV + "/api/create.php", data)
    .then(function(response) {
      console.log(response);
      setError(false);
    })
    .catch(function(error) {
      console.log(error);
      setError(true);
    });
};

export const formatDate = rawDate => {
  return new Date(rawDate).toLocaleDateString(
    {},
    {
      timeZone: "Asia/Manila",
      month: "long",
      day: "2-digit",
      year: "numeric"
    }
  );
};
