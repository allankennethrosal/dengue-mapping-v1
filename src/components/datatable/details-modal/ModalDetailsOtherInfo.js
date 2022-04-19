import React from "react";

/*
  OTHERS
  Icd10Code
  MorbidityMonth
  MorbidityWeek
  Year
  ILHZ
*/
const ModalDetailsOtherInfo = props => {
  const { selectedData } = props;

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Month:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.MorbidityMonth}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Week:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.MorbidityWeek}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Year:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.Year}
            ></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Icd10Code:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.Icd10Code}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">ILHZ:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.ILHZ}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsOtherInfo;
