import React, { useContext } from "react";
import { MapContext } from "../../context/MapContext";
import InfoChartAgeGroup from "./InfoChartAgeGroup";
import InfoYearControl from "./InfoYearControl";
import InfoRecordedCases from "./InfoRecordedCases";

const InfoSection = () => {
  const { muncity } = useContext(MapContext);

  return (
    <>
      <div className="flex flex-col w-full space-y-3">
        <InfoYearControl />
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
        <InfoRecordedCases />
        <InfoChartAgeGroup />
      </div>
    </>
  );
};

export default InfoSection;
