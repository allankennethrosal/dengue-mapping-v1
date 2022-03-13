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
import {
  getAnnualCases,
  getAnnualCasesOfMuncity
} from "../../utils/GraphUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnnualTrendChart = () => {
  const { dengueData, listMuncities } = useContext(GlobalContext);
  const [muncity, setMuncity] = useState("ALL");
  const annualCases =
    muncity === "ALL"
      ? getAnnualCases(dengueData)
      : getAnnualCasesOfMuncity(muncity, dengueData);

  const handleMuncitySelect = selectedMuncity => {
    setMuncity(selectedMuncity);
  };

  const data = {
    labels: Object.keys(annualCases),
    datasets: [
      {
        label: "Number of Cases",
        data: Object.values(annualCases),
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
        text: ``
      }
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-start items-center rounded-lg border-2 border-gray-200 overflow-hidden">
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
          <option value="ALL">ALL MUNCITIES</option>
          {listMuncities.map(m => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <p className="text-xs text-gray-900 text-center">
          Recorded Dengue Cases Trend Analysis <b>(Annual)</b>
        </p>
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default AnnualTrendChart;
