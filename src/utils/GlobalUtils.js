import axios from "axios";

const ENDPOINT_DEV = "http://localhost/dengue-monitor";
const ENDPOINT_PROD = "https://dengue-monitor.000webhostapp.com";

export const getCasesDB = setCases => {
  axios
    .get(ENDPOINT_PROD + "/api/retrieve.php")
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
    .post(ENDPOINT_PROD + "/api/create.php", data)
    .then(function(response) {
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
