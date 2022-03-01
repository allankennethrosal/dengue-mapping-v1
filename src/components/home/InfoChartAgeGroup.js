import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const InfoSectionChartAgeGroup = () => {
  const [windowX, setWindowX] = useState(window.innerWidth);

  const options = {
    responsive: true,
    aspectRatio: windowX < 768 ? 2 : 1,
    plugins: {
      legend: {
        position: windowX < 768 ? "right" : "bottom"
      },
      title: {
        display: true,
        text: "No. of Cases"
      }
    }
  };

  const data = {
    labels: [
      "00-14 years",
      "15-24 years",
      "25-64 years",
      "65 years and over"
      // "Children (00-14 years)",
      // "Youth (15-24 years)",
      // "Adults (25-64 years)",
      // "Seniors (65 years and over)"
    ],
    datasets: [
      {
        label: "No. of Cases",
        data: [12, 15, 9, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)"
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)"
          // "rgba(75, 192, 192, 1)",
          // "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  useEffect(() => {
    function handleResize() {
      setWindowX(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="bg-gray-100 w-full p-3">
        <h6 className="text-gray-900 font-bold text-sm px-2 mb-2">
          Dengue Cases of Age Groups
        </h6>
        <div className="flex justify-center items-center w-full p-3">
          <Pie data={data} options={options} height={null} width={null} />
        </div>
      </div>
    </>
  );
};

export default InfoSectionChartAgeGroup;
