import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // change to your desired primary color
    },
    secondary: {
      main: "#f44336", // change to your desired secondary color
    },
    background: {
      default: "#f5f5f5", // change to your desired default background color
      paper: "#ffffff", // change to your desired paper background color
    },
    text: {
      primary: "#333333", // change to your desired primary text color
      secondary: "#666666", // change to your desired secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // change to your desired font family
    fontSize: 14, // change to your desired base font size
    h1: {
      fontSize: "3rem", // change to your desired heading sizes
      fontWeight: 500, // change to your desired heading font weight
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5, // change to your desired line height
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
      color: "#999999", // change to your desired caption color
    },
  },
  shape: {
    borderRadius: 8, // change to your desired border radius
  },
  spacing: 8, // change to your desired base spacing
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none", // remove uppercase text transform on buttons
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#1976d2", // change to your desired hover color
        },
      },
    },
    MuiTextField: {
      root: {
        borderRadius: 4, // change to your desired border radius
        "& .MuiOutlinedInput-root": {
          borderRadius: 4, // change to your desired border radius for the input
        },
      },
    },
  },
});

export default theme;
