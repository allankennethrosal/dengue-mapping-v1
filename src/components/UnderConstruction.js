import React from "react";

const UnderConstruction = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3 bg-white p-10 rounded-xl shadow-lg">
        <svg
          className="h-16 w-16 text-red-700"
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
          <circle cx="5" cy="17" r="2" /> <circle cx="14" cy="17" r="2" />{" "}
          <line x1="7" y1="17" x2="12" y2="17" /> <path d="M3 17v-6h13v6" />{" "}
          <path d="M5 11v-4h4" /> <path d="M9 11v-6h4l3 6" />{" "}
          <path d="M22 15h-3v-10" /> <line x1="16" y1="13" x2="19" y2="13" />
        </svg>
        <h4 className="text-2xl font-bold text-gray-900 text-center">
          Content Unavailable
        </h4>
        <p className="text-center">
          Looks like there is no content to display yet for this page.
        </p>
      </div>
    </>
  );
};

export default UnderConstruction;
