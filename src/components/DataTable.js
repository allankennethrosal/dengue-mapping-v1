import React, { useState, useContext, useEffect, useRef } from "react";
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
  const tableTopRef = useRef();

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
          <div
            id="table-top"
            className="bg-white w-full border-b-2 border-gray-100"
          >
            <TableControlsTop
              searchText={searchText}
              setSearchText={setSearchText}
              totalRecords={dengueData.length}
              setStartIndexResult={setStartIndexResult}
            />
          </div>
          <div className="flex-1 bg-white w-full overflow-y-scroll overflow-x-hidden md:pb-16 pb-24">
            <div className="w-full" ref={tableTopRef}></div>
            <TableCases
              showLimit={showLimit}
              activeData={activeData}
              startIndexResult={startIndexResult}
            />
            {activeData.length >= 15 && (
              <div className="w-full py-10 text-center">
                <button
                  className="text-center text-blue-700 bg-gray-100 p-3 rounded-lg"
                  onClick={() => {
                    tableTopRef.current.scrollIntoView();
                  }}
                >
                  Back to top
                </button>
              </div>
            )}
          </div>
          <div className="bg-gray-900 w-full fixed bottom-0 left-0">
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
