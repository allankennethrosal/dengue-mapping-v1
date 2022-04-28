import axios from "axios";

const ENDPOINT_DEV = "http://localhost/dengue-monitor";
const ENDPOINT_PROD = "https://dengue-monitor.000webhostapp.com";

export const getCasesDB = setCases => {
  fetch(ENDPOINT_DEV + "/api/retrieve.php")
    .then(response => response.json())
    .then(data => setCases(data))
    .catch(error => {
      // handle error
      console.log(error);
      setCases(null);
    });

  // axios
  //   .get(ENDPOINT_DEV + "/api/retrieve.php")
  //   .then(response => {
  //     // handle success
  //     setCases(response.data);
  //   })
  //   .catch(error => {
  //     // handle error
  //     console.log(error);
  //     setCases(null);
  //   })
  //   .then(() => {
  //     // always executed
  //   });
};

export const createCaseDB = (data, setError) => {
  fetch(ENDPOINT_DEV + "/api/create.php", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(function(res) {
      console.log(res);
      setError(false);
    })
    .catch(function(res) {
      console.log(res);
      setError(true);
    });

  // axios
  //   .post(ENDPOINT_DEV + "/api/create.php", data)
  //   .then(function(response) {
  //     console.log(response);
  //     setError(false);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //     setError(true);
  //   });
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

export const formatDateDB = htmlDate => {
  const date = htmlDate.split("-");
  return date[1] + "/" + date[2] + "/" + date[0].substring(2, 4);
};
