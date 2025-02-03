"use client"; 

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ContextFeaturesProvider } from "@/context/ContextFeatures";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ContextFeaturesProvider>
        <GlobalStyle />
        {children}
      </ContextFeaturesProvider>
    </ThemeProvider>
  );
}