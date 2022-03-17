import React from "react";
import Navbar from "./Navbar";
import TableCases from "./datatable/TableCases";
import TableControlsTop from "./datatable/TableControlsTop";
import TableControlsBottom from "./datatable/TableControlsBottom";

const DataTable = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 max-h-screen h-screen">
        <Navbar />
        <div
          className="flex flex-col justify-center items-center overflow-hidden"
          style={{ height: "calc(100vh-64px)" }}
        >
          <div className="bg-white w-full border-b-2 border-gray-100">
            <TableControlsTop />
          </div>
          <div className="flex-1 bg-white w-full overflow-y-scroll overflow-x-hidden">
            <TableCases />
          </div>
          <div className="bg-gray-900 w-full">
            <TableControlsBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
