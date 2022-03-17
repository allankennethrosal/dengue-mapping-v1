import React from "react";
import { formatDate } from "../../utils/GlobalUtils";

/* 
  CASE INFORMATION
  Admitted
  DAdmit
  DOnset
  Type
  LabRes
  CaseClassification
  Outcome
  DateOfEntry
*/
const ModalDetailsCaseInfo = props => {
  const { selectedData } = props;
  const isAdmitted = parseInt(selectedData.Admitted);
  const admitted =
    isAdmitted === 1 || isAdmitted === 0
      ? isAdmitted === 1
        ? "Yes"
        : "No"
      : selectedData.Admitted;
  const dateAdmitted = formatDate(selectedData.DAdmit);
  const dateOnSet = formatDate(selectedData.DOnset);
  const dateOfEntry = formatDate(selectedData.DateOfEntry);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Admitted:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={admitted}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date Admitted:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateAdmitted}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date on Set:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateOnSet}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date of Entry:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateOfEntry}
            ></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Type:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value="DF"
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Laboratory Result:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value="NS1 Positive"
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Case Classification:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value="P"
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Outcome:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value="A"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsCaseInfo;
