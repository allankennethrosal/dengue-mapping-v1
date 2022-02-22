import React from "react";

const MapControls = props => {
  const { year, setYear } = props;

  return (
    <>
      <div className="absolute bottom-3 left-3 flex justify-start items-center">
        <div className="p-2 bg-gray-900 border-2 border-gray-900 rounded-l">
          <svg
            className="h-6 w-6 text-gray-300"
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
          className="p-2 bg-white text-black border-t-2 border-b-2 border-r-2 border-gray-900 rounded-r cursor-pointer outline-none"
          value={year}
          onChange={e => {
            setYear(e.target.value);
          }}
        >
          <option value="2014">2014 - Present</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <button className="absolute bottom-3 right-3 flex justify-center items-center bg-gray-900 text-white py-1 px-2 rounded border-2 border-gray-900 mr-0">
        <svg
          className="h-6 w-6 text-gray-300 mr-0 lg:mr-2"
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
        <span className="hidden lg:block text-sm">More Filters</span>
      </button>
    </>
  );
};

export default MapControls;
