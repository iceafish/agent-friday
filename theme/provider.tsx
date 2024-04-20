"use client";

import { createContext } from "react";
import { Fira_Code } from "next/font/google";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const customFontFamily = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
