"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DonutChart = () => {
  const series = [40, 32, 28]; 
  const labels = ["Afternoon", "Evening", "Morning"];
  const colors = ["#5A6ACF", "#8593ED", "#C7CEFF"]; 

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels,
    colors,
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: "bottom" },
        },
      },
    ],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val}%`,
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
