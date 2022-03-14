import React from "react";
import Navbar from "./Navbar";
import TableCases from "./datatable/TableCases";

const DataTable = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center p-3">
          <TableCases />
        </div>
      </div>
    </>
  );
};

export default DataTable;
