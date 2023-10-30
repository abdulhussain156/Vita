import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import RDVDoctorCard from "@/components/cards/RDVDoctorCard";
const doctorData = [
  {
    name: "Toby Valerie",
    title: "Pose d’implant dentaire",
    description: "Implant sur 16 et 17, prévoir greffe osseuse",
  },
  {
    name: "Toby Valerie",
    title: "Pose d’implant dentaire",
    description: "Implant sur 16 et 17, prévoir greffe osseuse",
  },
];
const RDV = () => {
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        RDV important
      </Typography>
      <Box
        display="flex"
        gap={3}
        sx={{
          p: 2,
          m: 2,
          width: "100%",
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "none",
        }}
      >
        <Grid container spacing={3}>
          {doctorData.map((item, index) => (
            <Grid item lg={6} key={index}>
              <RDVDoctorCard
                name={item.name}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RDV;
