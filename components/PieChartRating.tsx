"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChartRating = () => {
  const series = [30, 30, 40]; 
  const labels = ["Hygiene", "Food Taste", "Packaging"];
  const colors = ["#5A6ACF", "#8593ED", "#C7CEFF"]; 

  const options: ApexOptions = {
    chart: {
      type: "pie",
      width: "100%",
    },
    labels,
    colors,
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number, opts) => `${opts.w.globals.labels[opts.seriesIndex]}: ${val}%`,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChartRating;
