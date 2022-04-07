import React from "react";
import { saveAs } from "file-saver";

const FileActions = () => {
  const saveFile = (fileLink, fileName) => {
    saveAs(fileLink, fileName);
  };

  return (
    <>
      <div className="flex sm:container sm:mx-auto sm:flex-row flex-col sm:space-x-5 sm:space-y-0 space-x-0 space-y-5 justify-around items-center w-full">
        <button
          className="flex flex-col justify-center items-center space-y-5 p-10 border-4 border-gray-200 hover:border-gray-400 rounded-lg w-full text-center"
          onClick={() =>
            saveFile(
              "%PUBLIC_URL%/files/cases-sample-sheet.xlsx",
              "cases-sample-sheet.xlsx"
            )
          }
        >
          <svg
            className="h-12 w-12 text-gray-900"
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
          <span className="font-bold">
            Download
            <br />
            Worksheet
            <br />
            Template
          </span>
        </button>
        <button className="flex flex-col justify-center items-center space-y-5 p-10 border-4 border-gray-200 hover:border-gray-400 rounded-lg w-full">
          <svg
            className="h-12 w-12 text-gray-900"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
            <rect x="7" y="7" width="3" height="9" />{" "}
            <rect x="14" y="7" width="3" height="5" />
          </svg>
          <span className="font-bold">
            Download
            <br />
            Sample
            <br />
            CSV
          </span>
        </button>
        <button className="flex flex-col justify-center items-center space-y-5 p-10 border-4 border-gray-200 hover:border-gray-400 rounded-lg w-full">
          <svg
            className="h-12 w-12 text-gray-900"
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
            <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />{" "}
            <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
          </svg>
          <span className="font-bold">
            Parse
            <br />
            Sample
            <br />
            CSV
          </span>
        </button>
      </div>
    </>
  );
};

export default FileActions;
