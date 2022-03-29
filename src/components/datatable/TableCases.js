import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { formatDate } from "../../utils/GlobalUtils";

const TableCases = props => {
  const {
    activeData,
    showLimit,
    startIndexResult,
    handleModalDetailsOpen
  } = props;

  return (
    <>
      <Table>
        <Thead>
          <Tr className="bg-gray-900 text-white">
            <Th className="text-sm p-2">DAdmit</Th>
            <Th className="text-sm p-2">Muncity</Th>
            <Th className="text-sm p-2">Barangay</Th>
            <Th className="text-sm p-2">Name of DRU</Th>
            <Th className="text-sm p-2">Age</Th>
            <Th className="text-sm p-2">DEntry</Th>
            <Th className="text-sm p-2">
              <span className="sm:hidden block">Actions</span>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {activeData
            .slice(startIndexResult, startIndexResult + showLimit)
            .map((d, index) => (
              <Tr
                key={d.EPIID + Math.random()}
                className={`border-2 border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <Td className="text-sm text-center p-1">
                  {formatDate(d.DAdmit)}
                </Td>
                <Td className="text-sm text-center p-1">{d.Muncity}</Td>
                <Td className="text-sm text-center p-1">{d.Barangay}</Td>
                <Td className="text-sm text-center p-1">{d.NameOfDru}</Td>
                <Td className="text-sm text-center p-1">
                  {d.AgeYears.includes(".") && parseFloat(d.AgeYears) > 0
                    ? parseFloat(d.AgeYears).toFixed(2)
                    : d.AgeYears}
                </Td>
                <Td className="text-sm text-center p-1">
                  {formatDate(d.DateOfEntry)}
                </Td>
                <Td className="text-sm text-center p-1">
                  <button
                    className="flex justify-center items-center text-white bg-blue-500 hover:bg-blue-700 p-1 rounded"
                    onClick={() => handleModalDetailsOpen(d)}
                  >
                    <svg
                      className="h-6 w-6 text-white"
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
                      <path
                        d="M18 15l-6-6l-6 6h12"
                        transform="rotate(180 12 12)"
                      />
                    </svg>
                    <label className="sm:hidden block mx-1 cursor-pointer">
                      More
                    </label>
                  </button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default TableCases;
