import React from "react";

const TableControlsTop = () => {
  return (
    <>
      <div className="flex justify-start items-center sm:flex-row flex-col sm:space-x-3 space-x-0 sm:space-y-0 space-y-3 p-3">
        <div className="flex justify-start items-center sm:w-auto w-full">
          <label className="text-sm mr-3" htmlFor="search">
            Search:
          </label>
          <input
            className="text-sm sm:w-auto w-full p-2 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300"
            id="search"
            type="text"
            placeholder="3010 records..."
          />
        </div>
        <div className="flex justify-start items-center sm:w-auto w-full">
          <label className="text-sm" htmlFor="sort">
            Sort:
          </label>
          <select
            id="sort"
            className="text-sm ml-3 mr-1 sm:w-auto w-full p-2 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
          >
            <option value="DAdmit">Date Admitted</option>
            <option value="DEntry">Date of Entry</option>
            <option value="Muncity">Muncity</option>
            <option value="AgeYears">Age</option>
          </select>

          <select
            id="asc-desc"
            className="text-sm sm:w-auto w-full p-2 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
          >
            <option value="DAdmit">Ascending</option>
            <option value="DEntry">Descending</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TableControlsTop;
