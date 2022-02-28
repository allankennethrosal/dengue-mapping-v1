import React, { useState } from "react";

const MapAbout = () => {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <>
      <button
        className="flex justify-start items-center absolute bottom-3 left-3 bg-gray-800 hover:bg-gray-900 text-sm py-2 px-3 rounded-lg"
        onClick={() => setOpenAbout(true)}
      >
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-white ml-2 md:block hidden">About</p>
      </button>

      <div
        className={`absolute bottom-3 left-3 bg-yellow-200 w-64 rounded ${
          openAbout ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-2 pr-2">
          <p className="text-gray-900 text-sm font-bold">Map Info</p>
          <button
            className="flex justify-end items-center"
            onClick={() => setOpenAbout(false)}
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
        <p className="text-gray-900 p-3 pt-0 text-sm">
          This map presents the dengue cases of each city and municipality in
          Misamis Occidental, Philippines.
        </p>
      </div>
    </>
  );
};

export default MapAbout;
