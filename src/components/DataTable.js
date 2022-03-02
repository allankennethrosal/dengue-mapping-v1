import React from "react";
import Navbar from "./Navbar";
import UnderConstruction from "./UnderConstruction";

const DataTable = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center mt-10 p-3 pt-0">
          <UnderConstruction />
        </div>
      </div>
    </>
  );
};

export default DataTable;
