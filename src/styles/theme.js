import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
    },
    background: {
      default: "rgb(255, 255, 255)", //4
      khaki: "rgb(186, 178, 167)", //4
      grey: "rgb(129, 126, 127)", //3
      browny: "rgb(122, 100, 107)", //2
      bronze: "rgb(154, 92, 27)", //1
      maroon: "rgb(78, 3, 17)", //5
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(102, 111, 101)",
    },
  },
  typography: {
    fontFamily: " Ubuntu, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
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
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
      color: "#999999",
    },
  },
  shape: {
    borderRadius: "4px",
  },
  spacing: 8,
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "green",
        },
      },
    },
  },
});

export default theme;
