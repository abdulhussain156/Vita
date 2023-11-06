import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import PatientsCard from "@/components/cards/Patients/PatientsCard";
interface MyComponentProps {
  patientsData: {
    name: string;
    title: string;
  };
  date_RDV: string;
}
const Meetings = ({ patientsData, date_RDV }: MyComponentProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ flex: 1 }}
      >
        <Box>
          <PatientsCard name={patientsData.name} title={patientsData.title} />
        </Box>
        <Box sx={{ position: "relative", right: "50px" }}>
          <Typography variant="subtitle2" color="primary.dark">
            {date_RDV}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 0.8, textAlign: "center" }}>
        <TextField required sx={{ width: "80%" }} id="outlined-required" />
      </Box>
    </Box>
  );
};

export default Meetings;
