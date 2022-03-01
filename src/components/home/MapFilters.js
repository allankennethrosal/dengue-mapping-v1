import React, { useState } from "react";
import MapFiltersAge from "./MapFiltersAge";
import MapFiltersGender from "./MapFiltersGender";

const MapFilter = () => {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <>
      <button
        className="flex justify-start items-center absolute top-3 left-3 bg-white text-gray-900 hover:bg-gray-100 text-sm py-2 px-3 rounded-lg drop-shadow-lg"
        onClick={() => setOpenFilters(true)}
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
          <rect x="4" y="6" width="4" height="5" rx="1" />{" "}
          <line x1="6" y1="4" x2="6" y2="6" />{" "}
          <line x1="6" y1="11" x2="6" y2="20" />{" "}
          <rect x="10" y="14" width="4" height="5" rx="1" />{" "}
          <line x1="12" y1="4" x2="12" y2="14" />{" "}
          <line x1="12" y1="19" x2="12" y2="20" />{" "}
          <rect x="16" y="5" width="4" height="6" rx="1" />{" "}
          <line x1="18" y1="4" x2="18" y2="5" />{" "}
          <line x1="18" y1="11" x2="18" y2="20" />
        </svg>

        <p className="text-gray-900 ml-2 md:block hidden">Filters</p>
      </button>

      <div
        className={`absolute top-0 left-0 bg-transparent h-full md:h-auto w-full lg:min-w-max lg:w-1/3 p-3 z-20 drop-shadow-lg ${
          openFilters ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col bg-white p-3 w-full h-auto max-h-full space-y-3 rounded-lg overflow-y-scroll">
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold">Map Filters</p>
            <button
              className="flex justify-end items-center"
              onClick={() => setOpenFilters(false)}
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <MapFiltersAge />
          <MapFiltersGender />
        </div>
      </div>
    </>
  );
};

export default MapFilter;
