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
    yearFilter,
    setYearFilter
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

        <div className="flex justify-end items-center w-full">
          <div className="flex justify-start items-center md:w-auto w-full">
            <label className="text-sm" htmlFor="year">
              Year:
            </label>
            <select
              id="year"
              className="text-sm ml-3 mr-1 md:w-auto w-full md:p-2 p-1 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300 cursor-pointer"
              value={yearFilter}
              onChange={e => setYearFilter(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
            </select>
          </div>
          <button className="flex justify-center items-center text-white font-bold bg-green-700 hover:bg-green-900 md:w-auto w-full md:py-2 py-1 px-3 rounded">
            <svg
              className="h-6 w-6 text-white"
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

            <span className="ml-2 lg:block md:hidden block">Add a Record</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TableControlsTop;
