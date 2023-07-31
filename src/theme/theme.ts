import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    black: palette.augmentColor({
      color: { main: "#0F0F0F" },
      name: "black",
    }),
    blue: palette.augmentColor({
      color: { main: "#1E90FF" },
      name: "blue",
    }),
    gray: palette.augmentColor({
      color: { main: "#999999" },
      name: "gray",
    }),
    green: palette.augmentColor({
      color: { main: "#2BB784" },
      name: "green",
    }),
    lightGray: palette.augmentColor({
      color: { main: "#D7D7D7" },
      name: "lightGray",
    }),
    offWhite1: palette.augmentColor({
      color: { main: "#F8F8F8" },
      name: "offWhite1",
    }),
    offWhite2: palette.augmentColor({
      color: { main: "#F0F0F0" },
      name: "offWhite2",
    }),
    ruby: palette.augmentColor({
      color: { main: "#CA4238" },
      name: "ruby",
    }),
    white: palette.augmentColor({
      color: { main: "#FDFDFD" },
      name: "white",
    }),
  },
  typography: {
    allVariants: { color: "#0F0F0F" },
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontSize: "48px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 300,
    },
    body2: {
      fontSize: "18px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "italic",
      color: "#999999",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "italic",
      color: "#999999",
    },
  },
});

export default theme;
