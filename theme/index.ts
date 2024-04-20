"use client";

import { Fira_Code } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const customFontFamily = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: customFontFamily.style.fontFamily,
  },
});

export default theme;
