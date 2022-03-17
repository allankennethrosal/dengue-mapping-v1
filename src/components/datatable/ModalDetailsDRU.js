import React from "react";

/* 
  DRU INFORMATION
  DRU
  DRU Name
  DRU Address
  DRU Muncity
  DRU Province
  DRU Region
*/
const ModalDetailsDRU = props => {
  const { selectedData } = props;
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Disease Reporting Unit (DRU):</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.DRU}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Name:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.NameOfDru}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Address:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.AddressOfDRU}
            ></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Muncity:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.MuncityOfDRU}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Province:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.ProvOfDRU}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Region:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.RegionOfDrU}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsDRU;
