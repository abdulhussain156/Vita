import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const overviewData = [
  {
    title: "patients",
    total: 20,
    description: "Présent en consultation aujourd’hui",
  },
  {
    title: "Annulation",
    total: 2,
    description: "Nombre d’annulations du jour",
  },
  {
    title: "Taux de présence",
    total: 25,
    description: "Taux de remplissage de la journée ",
  },
];

/* Présent en consultation aujourd’hui */

const Overview = () => {
  const OverViewCard = ({
    title,
    total,
    description,
  }: {
    title: string;
    total: number;
    description: string;
  }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        m={1}
      >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          style={{
            background:
              "linear-gradient(180deg, rgba(4, 96, 163, 0.66) 22.92%, rgba(4, 96, 163, 0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {total}
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: "19px", textAlign: "center" }}
        >
          {description}
        </Typography>
      </Box>
    );
  };
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Apercu de la journée
      </Typography>
      <Box
        sx={{
          p: 3,
          m: 2,
          justifyContent: "space-evenly",
          display: "flex",
          width: "100%",
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "none",
        }}
      >
        {overviewData.map((item, index) => {
          return (
            <Box key={index}>
              <OverViewCard
                title={item.title}
                total={item.total}
                description={item.description}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Overview;
