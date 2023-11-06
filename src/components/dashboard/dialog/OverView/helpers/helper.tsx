import { Box } from "@mui/material";
import PatientsCard from "@/components/cards/Patients/PatientsCard";
interface PatientsProp {
  name: string;
  title: string;
  description?: any;
  type?: any;
}

export const renderPatientCards = (patients: PatientsProp[], label: any) => (
  <Box
    sx={{
      maxHeight: "50vh",
      overflowY: "scroll",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "gray",
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "darkgray",
      },
    }}
  >
    {patients.map((item, index) => (
      <Box key={index}>
        <PatientsCard
          name={item.name}
          title={item.title}
          description={item.description}
          type={item.type}
        />
      </Box>
    ))}
  </Box>
);
