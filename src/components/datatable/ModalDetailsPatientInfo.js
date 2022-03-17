import React from "react";

/* 
  PATIENT INFORMATION
  AgeYears
  AgeMons
  AgeDays
  Sex

  PATIENT ADDRESS
  Region
  Province
  District
  Muncity
  Barangay
  Streetpurok
*/
const ModalDetailsPatientInfo = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:space-x-5 space-x-0 md:space-y-0 space-y-5 w-full">
        <div className="flex flex-col space-y-5 flex-1">
          <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
            Personal Information
          </label>
          <div className="flex sm:flex-row flex-col sm:space-x-3 space-x-0 sm:space-y-0 space-y-3">
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Years:</label>
              <input
                className="p-3 rounded-lg font-bold w-full"
                disabled
                value="14"
              ></input>
            </div>
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Months:</label>
              <input
                className="p-3 rounded-lg font-bold w-full"
                disabled
                value="14"
              ></input>
            </div>
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Days:</label>
              <input
                className="p-3 rounded-lg font-bold w-full"
                disabled
                value="14"
              ></input>
            </div>
          </div>

          <div className="flex justify-start items-center space-x-3">
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Sex:</label>
              <input
                className="p-3 rounded-lg font-bold sm:w-auto w-full"
                disabled
                value="Male"
              ></input>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start py-3 space-y-5">
            <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
              Patient Location
            </label>
            <div className="bg-gray-100 p-5 rounded-lg w-full">
              Map is unavailable at the moment.
            </div>
          </div>
        </div>

        <div className="flex-1 w-full rounded-lg">
          <div className="flex flex-col space-y-5">
            <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
              Address Information
            </label>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Street/Purok:</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="Purok 8"
              ></input>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Barangay:</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="San Antonio"
              ></input>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">City/Municipality:</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="Ozamiz City"
              ></input>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">District:</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="District 3"
              ></input>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Province</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="Misamis Occidental"
              ></input>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Region</label>
              <input
                className="p-3 rounded-lg w-full font-bold"
                disabled
                value="Region X"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsPatientInfo;
