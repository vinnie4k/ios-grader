import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    blue: Palette["primary"];
    gray: Palette["primary"];
    green: Palette["primary"];
    lightGray: Palette["primary"];
    offWhite1: Palette["primary"];
    offWhite2: Palette["primary"];
    ruby: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    lightGray?: PaletteOptions["primary"];
    offWhite1?: PaletteOptions["primary"];
    offWhite2?: PaletteOptions["primary"];
    ruby?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    black: true;
    blue: true;
    gray: true;
    green: true;
    lightGray: true;
    offWhite1: true;
    offWhite2: true;
    ruby: true;
    white: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
  }
}

export default function createPalette(palette: PaletteOptions): Palette;
