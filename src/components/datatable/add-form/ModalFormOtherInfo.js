import React, { useContext } from "react";
import { TableContext } from "../../../context/TableContext";

const ModalDetailsOtherInfo = () => {
  const { addModalData, setAddModalData } = useContext(TableContext);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Month:</label>
            <input
              type="number"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.MorbidityMonth}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  MorbidityMonth: e.target.value
                })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Week:</label>
            <input
              type="number"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.MorbidityWeek}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  MorbidityWeek: e.target.value
                })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Year:</label>
            <input
              type="number"
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.Year}
              onChange={e =>
                setAddModalData({ ...addModalData, Year: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Icd10Code:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.Icd10Code}
              onChange={e =>
                setAddModalData({ ...addModalData, Icd10Code: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">ILHZ:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.ILHZ}
              onChange={e =>
                setAddModalData({ ...addModalData, ILHZ: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsOtherInfo;
