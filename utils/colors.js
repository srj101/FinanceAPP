import { rgbToHex } from "./funtions";

export default COLORS = {
  primary: rgbToHex(54, 54, 56), // which is #363638
  secondary: "#5271FF",
  white: "#FFFFFF",
  black: "#242426",
  red: rgbToHex(255, 59, 48),
  gray: "#6A6A6A",
  green: rgbToHex(40, 205, 65),
  yellow: "#EDD900",
  lightGray: rgbToHex(235, 235, 240),
  lightGray2: "#F6F6F6",
  lightGray3: "#EFEFEF",
  transparentBlack1: "#000000D9",
  transparentBlack7: "#000000B3",
  transparentBlack9: "#000000E6",
  transparentBlack8: "#000000CC",
  transparentBlack10: "#0000001A",
  transparentBlack11: "#0000001F",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes

  base: 8,

  font: 14,

  radius: 12,

  padding: 24,

  // font sizes

  largeTitle: 50,

  h1: 30,

  h2: 22,

  h3: 16,

  h4: 14,

  body1: 30,

  body2: 22,

  body3: 16,

  body4: 14,

  body5: 12,
};
