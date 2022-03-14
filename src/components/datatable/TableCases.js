import React, { useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { GlobalContext } from "../../context/GlobalContext";

const TableCases = () => {
  const { dengueData } = useContext(GlobalContext);

  return (
    <>
      <div className="bg-white w-full sm:rounded-t-lg rounded-t-none overflow-hidden mt-5">
        <Table>
          <Thead>
            <Tr className="bg-gray-800 text-white">
              <Th className="text-sm p-2">Muncity</Th>
              <Th className="text-sm p-2">DAdmit</Th>
              <Th className="text-sm p-2">NameOfDru</Th>
              <Th className="text-sm p-2">Age</Th>
              <Th className="text-sm p-2">DEntry</Th>
              <Th className="text-sm p-2">
                <span className="sm:hidden block">Actions</span>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dengueData.slice(0, 10).map((d, index) => (
              <Tr
                key={d.EPIID + d.DAdmit}
                className={`border-2 border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <Td className="text-sm text-center p-2">{d.Muncity}</Td>
                <Td className="text-sm text-center p-2">{d.DAdmit}</Td>
                <Td className="text-sm text-center p-2">{d.NameOfDru}</Td>
                <Td className="text-sm text-center p-2">{d.AgeYears}</Td>
                <Td className="text-sm text-center p-2">{d.DateOfEntry}</Td>
                <Td className="text-sm text-center p-2">
                  <button className="flex justify-center items-center text-white bg-gray-600 hover:bg-gray-700 py-1 px-2 rounded">
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
                      <polyline points="3 8 6 5 9 8" />{" "}
                      <polyline points="3 16 6 19 9 16" />{" "}
                      <line x1="6" y1="5" x2="6" y2="19" />{" "}
                      <line x1="13" y1="6" x2="20" y2="6" />{" "}
                      <line x1="13" y1="12" x2="20" y2="12" />{" "}
                      <line x1="13" y1="18" x2="20" y2="18" />
                    </svg>
                    <label className="sm:hidden block ml-2">More</label>
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default TableCases;
