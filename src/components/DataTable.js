import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import TableCases from "./datatable/TableCases";
import TableControlsTop from "./datatable/TableControlsTop";
import TableControlsBottom from "./datatable/TableControlsBottom";
import { GlobalContext } from "../context/GlobalContext";
import { searchData } from "../utils/TableUtils";

const DataTable = () => {
  const { dengueData } = useContext(GlobalContext);
  const [showLimit, setShowLimit] = useState(10);
  const [activeData, setActiveData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startIndexResult, setStartIndexResult] = useState(0);

  useEffect(() => {
    if (searchText === "") {
      setActiveData(dengueData);
    } else {
      setActiveData(searchData(dengueData, searchText));
    }
  }, [showLimit, searchText, dengueData]);

  return (
    <>
      <div className="flex flex-col bg-gray-100 max-h-screen h-screen">
        <Navbar />
        <div
          className="flex flex-col justify-center items-center overflow-hidden"
          style={{ height: "calc(100vh-64px)" }}
        >
          <div className="bg-white w-full border-b-2 border-gray-100">
            <TableControlsTop
              searchText={searchText}
              setSearchText={setSearchText}
              totalRecords={dengueData.length}
              setStartIndexResult={setStartIndexResult}
            />
          </div>
          <div className="flex-1 bg-white w-full overflow-y-scroll overflow-x-hidden">
            <TableCases
              showLimit={showLimit}
              activeData={activeData}
              startIndexResult={startIndexResult}
            />
          </div>
          <div className="bg-gray-900 w-full">
            <TableControlsBottom
              showLimit={showLimit}
              setShowLimit={setShowLimit}
              totalResults={activeData.length}
              startIndexResult={startIndexResult}
              setStartIndexResult={setStartIndexResult}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
