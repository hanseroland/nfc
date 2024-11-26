import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#FF5722" },
          secondary: { main: "#FFD700" },
          background: { default: "#ffffff", paper: "#f5f5f5" },
          text: { primary: "#000", secondary: "#444" },
          gradient: "linear-gradient(to right, #FF5722, #FFD700)", // Gradient Light
        }
      : {
          primary: { main: "#FF5722" },
          secondary: { main: "#FFD700" },
          background: { default: "#000", paper: "#121212" },
          text: { primary: "#fff", secondary: "#aaa" },
          gradient: "linear-gradient(to right, #FF5722, #FFD700)", // Gradient Dark
        }),
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h6: {
      fontWeight: "bold",
    },
  },
});

export const createCustomTheme = (mode) => createTheme(getDesignTokens(mode));
