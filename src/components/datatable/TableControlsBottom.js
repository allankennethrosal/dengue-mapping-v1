import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const TableControlsBottom = props => {
  const { listMuncities } = useContext(GlobalContext);
  const {
    showLimit,
    setShowLimit,
    totalResults,
    startIndexResult,
    setStartIndexResult,
    muncityFilter,
    setMuncityFilter,
    yearFilter,
    setYearFilter
  } = props;
  const [maxShow, setMaxShow] = useState(10);
  const handleNextPage = () => {
    if (startIndexResult + showLimit >= totalResults) {
      setStartIndexResult(totalResults - showLimit);
    } else {
      setStartIndexResult(startIndexResult + showLimit);
    }
  };
  const handlePrevPage = () => {
    if (startIndexResult - showLimit < 0) {
      setStartIndexResult(0);
    } else {
      setStartIndexResult(startIndexResult - showLimit);
    }
  };

  useEffect(() => {
    startIndexResult + showLimit > totalResults
      ? setMaxShow(totalResults)
      : setMaxShow(startIndexResult + showLimit);
  }, [showLimit, totalResults, startIndexResult]);

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between items-center space-y-3 lg:space-y-0 p-3">
        <div className="flex sm:flex-row flex-col lg:justify-start justify-between items-center sm:space-x-1 space-x-0 sm:space-y-0 space-y-1 w-full">
          <select
            id="show"
            className="text-sm w-full p-1 border-2 border-gray-100 focus:border-gray-300 rounded outline-none cursor-pointer"
            value={muncityFilter}
            onChange={e => setMuncityFilter(e.target.value)}
          >
            <option value="ALL">ALL MUNCITIES</option>
            {listMuncities.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <div className="flex w-full justify-start items-center space-x-1">
            <select
              id="year"
              className="text-sm w-full md:w-auto p-1 border-2 border-gray-100 rounded outline-none focus:border-gray-300 cursor-pointer"
              value={yearFilter}
              onChange={e => setYearFilter(e.target.value)}
            >
              <option value="ALL">All Time</option>
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
            <select
              id="show"
              className="text-sm w-full p-1 border-2 border-gray-100 focus:border-gray-300 rounded outline-none cursor-pointer"
              value={showLimit}
              onChange={e => setShowLimit(parseInt(e.target.value))}
            >
              <option value="10">Show 10</option>
              <option value="25">Show 25</option>
              <option value="50">Show 50</option>
              <option value="100">Show 100</option>
            </select>
          </div>
        </div>

        <div className="flex lg:justify-end justify-between items-center w-full">
          <label className="text-sm text-gray-900 mr-3" htmlFor="show">
            {`Showing ${
              totalResults > 0 ? startIndexResult + 1 : 0
            } to ${maxShow} of ${totalResults} entries`}
          </label>

          <div className="flex justify-start items-center">
            <button
              className="bg-white hover:bg-gray-100 p-1 rounded-l"
              onClick={() => setStartIndexResult(0)}
              disabled={startIndexResult <= 0 ? true : false}
            >
              <svg
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polyline points="11 17 6 12 11 7" />{" "}
                <polyline points="18 17 13 12 18 7" />
              </svg>
            </button>

            <button
              className="bg-white hover:bg-gray-100 p-1"
              onClick={handlePrevPage}
              disabled={startIndexResult <= 0 ? true : false}
            >
              <svg
                className="h-6 w-6 text-gray-900"
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
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>

            <button
              className="bg-white hover:bg-gray-100 p-1"
              onClick={handleNextPage}
              disabled={
                startIndexResult + showLimit >= totalResults ? true : false
              }
            >
              <svg
                className="h-6 w-6 text-gray-900"
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
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            <button
              className="bg-white hover:bg-gray-100 p-1 rounded-r"
              onClick={() => setStartIndexResult(totalResults - showLimit)}
              disabled={
                startIndexResult + showLimit >= totalResults ? true : false
              }
            >
              <svg
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polyline points="13 17 18 12 13 7" />{" "}
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableControlsBottom;
