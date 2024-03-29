"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Typography, Grid } from "@mui/material";

const pieChartOptions = {
  labels: ["Pose Protheses", "Endodontie", "consultation"],
  colors: ["#689fd1", "#81afd9", "#ccdfef"],
  chart: {
    width: 200, // Set as a number, not a string
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true, // Display labels on the chart
    style: {
      fontSize: "12px",
      colors: ["black"],
    },
    formatter: (val: number, opts: any) => {
      const roundedValue = Math.round(val); // Round to the nearest whole number
      return opts.w.config.labels[opts.seriesIndex] + ": " + roundedValue + "%";
    },
  },
  plotOptions: {
    pie: {
      donut: {
        expandOnClick: false,
        labels: {
          show: false, // Show labels on each part of the chart
        },
      },
    },
  },

  fill: {
    colors: ["#689fd1", "#81afd9", "#ccdfef"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

const pieChartData = [63, 20, 15];

// Total Spent Default

const RDVChart = () => {
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Type de RDV
      </Typography>
      <Box
        id="chart"
        sx={{
          p: 1,
          m: 2,
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "none",
        }}
      >
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={pieChartOptions}
            series={pieChartData}
            type="pie"
            width="100%"
            height="150%"
          />
        )}
      </Box>
    </Box>
  );
};

export default RDVChart;
