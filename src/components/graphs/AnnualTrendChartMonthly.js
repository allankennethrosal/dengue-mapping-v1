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
import { getAnnualCases } from "../../utils/GraphUtils";

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
  const { dengueData } = useContext(GlobalContext);
  const annualCases = getAnnualCases(dengueData);
  const [muncity, setMuncity] = useState("OZAMIZ CITY");

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
        display: true,
        position: "top",
        text: `${muncity} Recorded Dengue Cases Trend Analysis (Monthly)`
      }
    }
  };

  const handleMuncitySelect = selectedMuncity => {
    setMuncity(selectedMuncity);
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
          <option value="OZAMIZ CITY">OZAMIZ CITY</option>
          <option value="TANGUB CITY">TANGUB CITY</option>
        </select>
      </div>
      <div className="mt-3">
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default AnnualTrendChartMonthly;
