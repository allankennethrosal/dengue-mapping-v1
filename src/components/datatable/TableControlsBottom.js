import React from "react";

const TableControlsBottom = () => {
  return (
    <>
      <div className="p-3">
        <label className="text-sm text-white mr-3" htmlFor="show">
          Page 1 of 58
        </label>
        <select
          id="show"
          className="bg-gray-100 text-sm sm:w-auto w-full p-1 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
        >
          <option value="DAdmit">Show 10</option>
          <option value="DEntry">Show 25</option>
          <option value="Muncity">Show 50</option>
        </select>
      </div>
    </>
  );
};

export default TableControlsBottom;
