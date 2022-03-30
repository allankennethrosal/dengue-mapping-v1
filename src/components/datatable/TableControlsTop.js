import React from "react";

const TableControlsTop = props => {
  const {
    searchText,
    setSearchText,
    totalRecords,
    setStartIndexResult,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    handleUploadClick
  } = props;
  const handleSearchInput = e => {
    setSearchText(e.target.value);
    setStartIndexResult(0);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between justify-start items-center md:space-x-3 space-x-0 md:space-y-0 space-y-2 p-3">
        <div className="flex md:flex-row flex-col justify-start items-center md:space-x-3 space-x-0 md:space-y-0 space-y-2 w-full">
          <div className="flex justify-start items-center md:w-auto w-full">
            <label className="text-sm mr-3" htmlFor="search">
              Search:
            </label>
            <input
              className="text-sm md:w-auto w-full md:p-2 p-1 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300"
              id="search"
              type="text"
              value={searchText}
              placeholder={`${totalRecords} total records...`}
              onChange={handleSearchInput}
            />
          </div>
          <div className="flex justify-start items-center md:w-auto w-full">
            <label className="text-sm" htmlFor="sort">
              Sort:
            </label>
            <select
              id="sort"
              className="text-sm ml-3 mr-1 md:w-auto w-full md:p-2 p-1 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="DAdmit">Date Admitted</option>
              <option value="DateOfEntry">Date of Entry</option>
              <option value="Muncity">Muncity</option>
              <option value="AgeYears">Age</option>
            </select>

            <select
              id="asc-desc"
              className="text-sm md:w-auto w-full md:p-2 p-1 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end items-center w-full space-x-1">
          <button className="flex justify-center items-center text-green-600 hover:text-white bg-white hover:bg-green-600 border-2 border-green-600 md:w-auto w-full py-2 px-3 rounded">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>

            <span className="ml-2 lg:block md:hidden sm:block hidden">
              Add a Record
            </span>
          </button>
          <button
            className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 hover:border-green-700 md:w-auto w-full py-2 px-3 rounded"
            onClick={handleUploadClick}
          >
            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <line x1="9" y1="9" x2="10" y2="9" />{" "}
              <line x1="9" y1="13" x2="15" y2="13" />{" "}
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>

            <span className="ml-2 lg:block md:hidden sm:block hidden">
              Upload CSV
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TableControlsTop;
