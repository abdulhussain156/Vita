import React from "react";
import { Box, Typography } from "@mui/material";
import DoctorCard from "@/components/cards/DoctorCard";

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
const List = () => {
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Liste des taches
      </Typography>
      <Box
        sx={{
          p: 2,
          m: 2,
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "none",
        }}
      >
        {doctorData.map((item, key) => (
          <Box key={key} mb={3} mt={3}>
            <DoctorCard
              id={key}
              name={item.name}
              title={item.title}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default List;
