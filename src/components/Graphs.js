import React from "react";
import Navbar from "./Navbar";
import YearTrendChart from "../components/graphs/YearTrendChart";

const Graphs = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex md:flex-row flex-col md:space-x-3 space-x-0 md:space-y-0 space-y-3 justify-center items-center p-3">
          <div className="bg-white rounded-lg md:w-1/2 w-full p-3">
            <YearTrendChart />
          </div>
          <div className="bg-white rounded-lg md:w-1/2 w-full p-3">
            <YearTrendChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphs;
