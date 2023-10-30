import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(222, 234, 243, 1)",
    },
    secondary: {
      main: "#3B83B8",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h3: {
      fontWeight: 500,
      fontSize: "48px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "26px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "20px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#939393",
    },
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }: any) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
