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
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "gray", // колір слайдера
          height: 8, // висота слайдера
        },
        thumb: {
          height: 20, // висота кінчика слайдера
          width: 20, // ширина кінчика слайдера
          backgroundColor: "white", // колір кінчика слайдера
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)", // тінь кінчика слайдера
          "&:hover": {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)", // тінь кінчика слайдера при наведенні
          },
          "&$focusVisible": {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)", // тінь кінчика слайдера при фокусуванні
          },
        },
        track: {
          height: 8, // висота доріжки слайдера
          borderRadius: 4, // радіус закруглення доріжки слайдера
        },
        rail: {
          height: 8, // висота фонової доріжки слайдера
          borderRadius: 4, // радіус закруглення фонової доріжки слайдера
        },
      },
    },
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
