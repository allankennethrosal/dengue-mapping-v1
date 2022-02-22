import React from "react";

const InfoSection = props => {
  const {
    location: { municity, province }
  } = props;

  return (
    <>
      <div className="w-full mt-3">
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
            {municity}, {province}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-row flex-col w-full lg:space-x-3 lg:space-y-0 md:space-x-0 md:space-y-3 sm:space-x-3 sm:space-y-0 space-x-0 space-y-3 mt-3">
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
            <h6 className="text-gray-900 font-bold text-2xl">256</h6>
            <p className="text-gray-600 font-bold text-sm">Dengue Cases</p>
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
            <h6 className="text-gray-900 font-bold text-2xl">+10</h6>
            <p className="text-gray-600 font-bold text-sm">
              From previous year
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full h-24 mt-3"></div>
    </>
  );
};

export default InfoSection;
