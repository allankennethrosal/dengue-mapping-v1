import React, { useState, useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GlobalContext } from "../../context/GlobalContext";
import { getYears, getMonthlyCases } from "../../utils/GraphUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnnualTrendChartMonthly = () => {
  const { dengueData, listMuncities } = useContext(GlobalContext);
  const listYears = Object.keys(getYears());
  const [muncity, setMuncity] = useState("OZAMIS CITY");
  const [year, setYear] = useState("2018");
  const monthlyCases = getMonthlyCases(muncity, year, dengueData);

  const handleMuncitySelect = selectedMuncity => {
    setMuncity(selectedMuncity);
  };
  const handleYearSelect = selectedYear => {
    setYear(selectedYear);
  };

  const data = {
    labels: Object.keys(monthlyCases),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(monthlyCases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: false,
        text: ""
      }
    }
  };

  return (
    <>
      <div className="flex justify-start items-center md:flex-row flex-col md:space-x-1 space-x-0 md:space-y-0 space-y-1">
        <div className="flex-1 bg-gray-100 flex justify-start items-center rounded-lg border-2 border-gray-200 overflow-hidden md:w-auto w-full">
          <label className="px-3">
            <svg
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </label>
          <select
            className="flex-1 font-bold text-gray-900 p-3 outline-none cursor-pointer"
            value={muncity}
            onChange={e => handleMuncitySelect(e.target.value)}
          >
            {listMuncities.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gray-100 flex justify-start items-center rounded-lg border-2 border-gray-200 overflow-hidden md:w-auto w-full">
          <label className="px-3">
            <svg
              className="h-6 w-6 text-gray-900"
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
              <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
              <line x1="16" y1="3" x2="16" y2="7" />{" "}
              <line x1="8" y1="3" x2="8" y2="7" />{" "}
              <line x1="4" y1="11" x2="20" y2="11" />{" "}
              <line x1="11" y1="15" x2="12" y2="15" />{" "}
              <line x1="12" y1="15" x2="12" y2="18" />
            </svg>
          </label>
          <select
            className="flex-1 font-bold text-gray-900 p-3 outline-none cursor-pointer"
            value={year}
            onChange={e => handleYearSelect(e.target.value)}
          >
            {listYears.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs text-gray-900 text-center">
          Recorded Dengue Cases Trend Analysis <b>(Monthly)</b>
        </p>
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default AnnualTrendChartMonthly;
