import React from "react";

const ModalDetailsCaseInfo = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Admitted:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date Admitted:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date on Set:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date of Entry:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Type:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Laboratory Result:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Case Classification:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Outcome:</label>
            <input className="p-3 rounded-lg font-bold w-full border-2 border-gray-300"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsCaseInfo;
