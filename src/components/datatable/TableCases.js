import React, { useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { GlobalContext } from "../../context/GlobalContext";

const TableCases = () => {
  const { dengueData } = useContext(GlobalContext);

  return (
    <>
      <Table>
        <Thead>
          <Tr className="bg-gray-800 text-white">
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
          {dengueData.slice(0, 15).map((d, index) => (
            <Tr
              key={d.EPIID + d.DAdmit}
              className={`border-2 border-gray-200 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <Td className="text-sm text-center p-1">{d.DAdmit}</Td>
              <Td className="text-sm text-center p-1">{d.Muncity}</Td>
              <Td className="text-sm text-center p-1">{d.Barangay}</Td>
              <Td className="text-sm text-center p-1">{d.NameOfDru}</Td>
              <Td className="text-sm text-center p-1">
                {d.AgeYears < 1 ? "< 1" : d.AgeYears}
              </Td>
              <Td className="text-sm text-center p-1">{d.DateOfEntry}</Td>
              <Td className="text-sm text-center p-1">
                <button className="flex justify-center items-center text-white bg-gray-600 hover:bg-gray-700 p-1 rounded">
                  <svg
                    class="h-6 w-6 text-white"
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
                  <label className="sm:hidden block mx-1">More</label>
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