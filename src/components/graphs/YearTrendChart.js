import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Dengue Cases Trend Analysis (Year)"
    }
  }
};

const labels = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"];

export const data = {
  labels,
  datasets: [
    {
      label: "Number of Cases",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};

const YearTrendChart = () => {
  return <Line options={options} data={data} />;
};

export default YearTrendChart;
