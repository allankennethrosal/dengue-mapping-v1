import React, { useContext } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const getAnnualCases = dengueData => {
  const annualCases = {};
  const d = new Date();
  const todayYear = d.getFullYear() < 2022 ? 2022 : d.getFullYear();

  for (let i = 2014; i <= todayYear; i++) {
    i = i.toString();
    annualCases[i] = 0;
  }

  // get number of cases per year
  for (const d of dengueData) {
    if (annualCases[d.Year]) {
      annualCases[d.Year] += 1;
    } else {
      annualCases[d.Year] = 1;
    }
  }

  return annualCases;
};

const AnnualTrendChart = () => {
  const { dengueData } = useContext(GlobalContext);
  const annualCases = getAnnualCases(dengueData);

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
        position: "top"
      },
      title: {
        display: true,
        text: "Recorded Dengue Cases Trend Analysis (Annual)"
      }
    }
  };

  return <Line options={options} data={data} />;
};

export default AnnualTrendChart;
