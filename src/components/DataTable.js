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
          className="flex flex-col justify-center items-center p-3 overflow-hidden drop-shadow-md"
          style={{ height: "calc(100vh-64px)" }}
        >
          <div className="bg-white w-full rounded-t-lg border-b-2 border-gray-100">
            <TableControlsTop />
          </div>
          <div className="flex-1 bg-white w-full overflow-y-scroll overflow-x-hidden">
            <TableCases />
          </div>
          <div className="bg-gray-900 w-full rounded-b-lg">
            <TableControlsBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
