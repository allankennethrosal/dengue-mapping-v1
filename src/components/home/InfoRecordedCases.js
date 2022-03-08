import React, { useContext } from "react";
import { MapContext } from "../../context/MapContext";

const InfoSectionRecordedCases = () => {
  const {
    muncityCasesCount,
    prevYearCase,
    mapFilters: { year }
  } = useContext(MapContext);
  const comparedCases = parseInt(muncityCasesCount) - parseInt(prevYearCase);

  return (
    <>
      <div className="flex justify-start items-center w-full bg-gray-100 p-3 rounded-lg">
        <div>
          <svg
            className="h-16 w-16 text-gray-900"
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
            <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a.9 .9 0 0 0 -1 -.8" />{" "}
            <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" />
          </svg>
        </div>
        <div className="ml-3">
          <h6 className="text-gray-900 font-bold text-2xl">
            {muncityCasesCount}
          </h6>
          <p className="text-gray-600 font-bold text-sm">
            Recorded Dengue Cases
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center w-full bg-gray-100 p-3 rounded-lg">
        <div>
          <svg
            className="h-16 w-16 text-gray-900"
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
            <line x1="4" y1="19" x2="20" y2="19" />{" "}
            <polyline points="4 15 8 9 12 11 16 6 20 10" />
          </svg>
        </div>
        <div className="ml-3">
          {year === "All" || year === "2014" ? (
            <>
              <h6 className="font-bold text-2xl text-red-600">
                {year === "2014" ? "-" : prevYearCase}
              </h6>
              <p className="text-gray-600 font-bold text-sm">
                {year === "2014" ? "From previous year" : "From current year"}
              </p>
            </>
          ) : (
            <>
              <h6
                className={`font-bold text-2xl ${
                  comparedCases > 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {comparedCases > 0 && "+"}
                {comparedCases}
              </h6>
              <p className="text-gray-600 font-bold text-sm">
                From previous year
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoSectionRecordedCases;
