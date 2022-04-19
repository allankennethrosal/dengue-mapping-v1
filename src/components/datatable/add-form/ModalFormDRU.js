import React from "react";

const ModalDetailsDRU = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Disease Reporting Unit (DRU):</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Name:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Address:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Muncity:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Province:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Region:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsDRU;
