import React, { useState, useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import TableCases from "./datatable/TableCases";
import TableControlsTop from "./datatable/TableControlsTop";
import TableControlsBottom from "./datatable/TableControlsBottom";
import { GlobalContext } from "../context/GlobalContext";
import { searchData, sortData, filterData } from "../utils/TableUtils";

const DataTable = () => {
  const { dengueData } = useContext(GlobalContext);
  const [showLimit, setShowLimit] = useState(10);
  const [activeData, setActiveData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startIndexResult, setStartIndexResult] = useState(0);
  const [sortBy, setSortBy] = useState("DAdmit");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [yearFilter, setYearFilter] = useState("ALL");
  const [muncityFilter, setMuncityFilter] = useState("ALL");
  const [tableLoading, setTableLoading] = useState(true);
  const tableTopRef = useRef();

  useEffect(() => {
    (async () => {
      setTableLoading(true);
      if (searchText === "") {
        setActiveData(
          await sortData(
            await filterData(dengueData, yearFilter, muncityFilter),
            sortOrder,
            sortBy
          )
        );
        setTableLoading(false);
      } else {
        setActiveData(
          await sortData(
            await searchData(
              await filterData(dengueData, yearFilter, muncityFilter),
              searchText
            ),
            sortOrder,
            sortBy
          )
        );
        setTableLoading(false);
      }
    })();
  }, [
    showLimit,
    searchText,
    dengueData,
    sortBy,
    sortOrder,
    yearFilter,
    muncityFilter
  ]);

  return (
    <>
      <div className="flex flex-col bg-gray-100 max-h-screen h-screen">
        <Navbar />
        <div
          className="flex flex-col justify-center items-center overflow-hidden"
          style={{ height: "calc(100vh-64px)" }}
        >
          <div className="w-full p-3">
            <div
              id="table-top"
              className="bg-white w-full border-b-2 border-gray-100 rounded-lg"
            >
              <TableControlsTop
                searchText={searchText}
                setSearchText={setSearchText}
                totalRecords={dengueData.length}
                setStartIndexResult={setStartIndexResult}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                setTableLoading={setTableLoading}
                yearFilter={yearFilter}
                setYearFilter={setYearFilter}
              />
            </div>
          </div>

          <div className="w-full px-3 overflow-y-scroll overflow-x-hidden lg:pb-18 pb-28">
            {activeData.length > 0 ? (
              !tableLoading ? (
                <div className="flex-1 bg-white w-full overflow-x-hidden rounded-lg">
                  <div className="w-full" ref={tableTopRef}></div>
                  <TableCases
                    showLimit={showLimit}
                    activeData={activeData}
                    startIndexResult={startIndexResult}
                  />
                  {activeData.length >= 15 && (
                    <div className="w-full text-center pt-5 pb-8">
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
              ) : (
                <div className="py-10 mt-10 text-center bg-white sm:w-2/3 w-full rounded-lg">
                  Loading...
                </div>
              )
            ) : (
              <div className="py-10 mt-10 text-center bg-white sm:w-2/3 w-full rounded-lg">
                No records found.
              </div>
            )}
          </div>

          <div className="bg-gray-100 w-full p-3 fixed bottom-0 left-0">
            <div className="bg-white w-full rounded-lg">
              <TableControlsBottom
                showLimit={showLimit}
                setShowLimit={setShowLimit}
                totalResults={activeData.length}
                startIndexResult={startIndexResult}
                setStartIndexResult={setStartIndexResult}
                muncityFilter={muncityFilter}
                setMuncityFilter={setMuncityFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
