import React from "react";
import { ChartAgeGroup } from "./ChartAgeGroup";

const InfoSection = props => {
  const {
    location: { muncity },
    muncityCasesCount,
    year,
    setYear
  } = props;

  return (
    <>
      <div className="flex flex-col w-full space-y-3">
        <div className="flex justify-start items-center bg-gray-800 rounded-lg">
          <div className="p-3 border-r-2 border-gray-600">
            <svg
              className="h-8 w-8 text-gray-100"
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
              <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
              <line x1="16" y1="3" x2="16" y2="7" />{" "}
              <line x1="8" y1="3" x2="8" y2="7" />{" "}
              <line x1="4" y1="11" x2="20" y2="11" />{" "}
              <line x1="11" y1="15" x2="12" y2="15" />{" "}
              <line x1="12" y1="15" x2="12" y2="18" />
            </svg>
          </div>
          <select
            id="year"
            className="flex-1 p-3 bg-gray-800 text-gray-100 font-bold cursor-pointer outline-none"
            value={year}
            onChange={e => {
              setYear(e.target.value);
            }}
          >
            <option value="All">2014 to 2020</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="flex justify-start items-center bg-gray-100 p-3 rounded-lg">
          <svg
            className="h-8 w-8 text-gray-900"
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
            <circle cx="12" cy="11" r="3" />{" "}
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p className="text-gray-900 font-bold ml-2 text-md">
            {muncity ? `${muncity}` : "Click a layer on the map"}
          </p>
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
            <h6 className="text-red-600 font-bold text-2xl">+10</h6>
            <p className="text-gray-600 font-bold text-sm">
              From previous year
            </p>
          </div>
        </div>
        <div className="bg-gray-100 w-full p-3">
          <h6 className="text-gray-900 font-bold text-sm px-2 mb-2">
            Dengue Cases of Age Groups
          </h6>
          <div className="flex justify-center items-center w-full p-3">
            <ChartAgeGroup />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
