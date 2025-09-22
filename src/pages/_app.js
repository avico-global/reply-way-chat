import "@/styles/globals.css";
import React from "react";
import { ThemeProvider } from "@/utils/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
