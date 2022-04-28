import React, { useContext } from "react";
import { TableContext } from "../../../context/TableContext";

const ModalDetailsCaseInfo = () => {
  const { addModalData, setAddModalData } = useContext(TableContext);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-1 flex-col justify-start items-start space-y-3">
            <label className="text-sm">Admitted:</label>
            <div
              className="flex justify-start items-center space-x-5 w-full p-5 border-2 border-gray-300 rounded-lg"
              value={addModalData.Admitted}
              onChange={e =>
                setAddModalData({ ...addModalData, Admitted: e.target.value })
              }
            >
              <label className="flex justify-start items-center space-x-2">
                <input type="radio" value="1" name="admitted" />
                <span>Yes</span>
              </label>
              <label className="flex justify-start items-center space-x-2">
                <input type="radio" value="0" name="admitted" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date Admitted:</label>
            <input
              type="date"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.DAdmit}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  DAdmit: e.target.value
                });
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date on Set:</label>
            <input
              type="date"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.DOnset}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  DOnset: e.target.value
                });
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date of Entry:</label>
            <input
              type="date"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.DateOfEntry}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  DateOfEntry: e.target.value
                });
              }}
            ></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Type:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.Type}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  Type: e.target.value
                });
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Laboratory Result:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.LabRes}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  LabRes: e.target.value
                });
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Case Classification:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.CaseClassification}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  CaseClassification: e.target.value
                });
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Outcome:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.Outcome}
              onChange={e => {
                setAddModalData({
                  ...addModalData,
                  Outcome: e.target.value
                });
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsCaseInfo;
