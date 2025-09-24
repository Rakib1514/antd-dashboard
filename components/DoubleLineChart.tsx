"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const DoubleLineChart = () => {
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69],
    },
    {
      name: "Laptops",
      data: [23, 32, 42, 58, 56, 74, 80],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 },

    grid: {
      row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#5A6ACF", "#8593ED"],
    
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default DoubleLineChart;
