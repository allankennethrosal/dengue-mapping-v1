import React, { useState } from "react";
import ModalDetailsPatientInfo from "./ModalDetailsPatientInfo";

const ModalDetails = props => {
  const { open, handleClose } = props;
  const [activePage, setActivePage] = useState(0);
  const [caseData, setCaseData] = useState(null);

  const handleMenuClick = pageNum => {
    setActivePage(pageNum);
  };

  return (
    <>
      <div
        className="absolute left-0 bg-white w-screen z-30 p-5 overflow-y-scroll"
        style={{
          height: "calc(100% - 64px)",
          top: 64,
          display: open ? "block" : "none"
        }}
      >
        <div className="flex flex-col justify-start items-start bg-white w-full space-y-5">
          <div className="flex justify-between items-center space-x-3 w-full">
            <h4 className="md:text-md text-sm font-bold bg-gray-100 p-3 rounded-lg drop-shadow-md">
              <span className="text-gray-900">EPID: </span>
              <span className="text-green-700 truncate">
                A3D000804D
                {/* A3D000804D914BE199E60AB14B4A027E */}
              </span>
            </h4>
            <button className="drop-shadow-lg" onClick={handleClose}>
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center space-x-3 w-full">
            <button
              className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
                0 && "flex-1"}`}
              onClick={() => handleMenuClick(0)}
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className={`text-sm font-bold truncate ${
                  activePage === 0 ? "sm:block hidden" : "lg:block hidden"
                }`}
              >
                Patient Information
              </span>
            </button>

            <button
              className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
                1 && "flex-1"}`}
              onClick={() => handleMenuClick(1)}
            >
              <svg
                className="h-6 w-6 text-white"
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
                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
              </svg>
              <span
                className={`text-sm font-bold truncate ${
                  activePage === 1 ? "sm:block hidden" : "lg:block hidden"
                }`}
              >
                Case Information
              </span>
            </button>
            <button
              className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
                2 && "flex-1"}`}
              onClick={() => handleMenuClick(2)}
            >
              <svg
                className="h-6 w-6 text-white"
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
                <line x1="3" y1="21" x2="21" y2="21" />{" "}
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />{" "}
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />{" "}
                <line x1="10" y1="9" x2="14" y2="9" />{" "}
                <line x1="12" y1="7" x2="12" y2="11" />
              </svg>
              <span
                className={`text-sm font-bold truncate ${
                  activePage === 2 ? "sm:block hidden" : "lg:block hidden"
                }`}
              >
                DRU Information
              </span>
            </button>
            <button
              className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
                3 && "flex-1"}`}
              onClick={() => handleMenuClick(3)}
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span
                className={`text-sm font-bold truncate ${
                  activePage === 3 ? "sm:block hidden" : "lg:block hidden"
                }`}
              >
                Other Information
              </span>
            </button>
          </div>

          <div className="w-full border-t-2 py-5 border-gray-100">
            <ModalDetailsPatientInfo />
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <button
      className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
        1 && "flex-1"}`}
      onClick={() => handleMenuClick(1)}
    >
      <svg
        className="h-6 w-6 text-white"
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
      <span
        className={`text-sm font-bold truncate ${
          activePage === 1 ? "sm:block hidden" : "lg:block hidden"
        }`}
      >
        Patient Address
      </span>
    </button> */
}

export default ModalDetails;
