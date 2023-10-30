import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Overview from "@/components/dashboard/overview/Overview";
import List from "@/components/dashboard/list/List";
// import PatientsGraph from "@/components/dashboard/graphs/PatientsGraph";
import dynamic from "next/dynamic";
import RDV from "@/components/dashboard/RDV/RDV";
import ProgressBar from "@/components/dashboard/ProgressBar/ProgressBar";
import RDVChart from "@/components/dashboard/graphs/RDVChart";

const DynamicPatientsGraph = dynamic(
  () => import("@/components/dashboard/graphs/PatientsGraph"),
  {
    ssr: false, // This disables server-side rendering for the component
  }
);

const DynamicPieChart = dynamic(
  () => import("@/components/dashboard/graphs/RDVChart"),
  {
    ssr: false, // This disables server-side rendering for the component
  }
);
export default function StarredPage() {
  return (
    <Box mt={8}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Overview />
          <DynamicPatientsGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <List />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <RDV />
          <ProgressBar />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DynamicPieChart />
        </Grid>
      </Grid>
    </Box>
  );
}
