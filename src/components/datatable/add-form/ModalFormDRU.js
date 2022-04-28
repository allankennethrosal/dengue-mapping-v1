import React, { useContext } from "react";
import { TableContext } from "../../../context/TableContext";

const ModalDetailsDRU = () => {
  const { addModalData, setAddModalData } = useContext(TableContext);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Disease Reporting Unit (DRU):</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.DRU}
              onChange={e =>
                setAddModalData({ ...addModalData, DRU: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Name:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.NameOfDru}
              onChange={e =>
                setAddModalData({ ...addModalData, NameOfDru: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Address:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.AddressOfDRU}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  AddressOfDRU: e.target.value
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Muncity:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.MuncityOfDRU}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  MuncityOfDRU: e.target.value
                })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Province:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.ProvOfDRU}
              onChange={e =>
                setAddModalData({ ...addModalData, ProvOfDRU: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Region:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.RegionOfDrU}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  RegionOfDrU: e.target.value
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsDRU;
