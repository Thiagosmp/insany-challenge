"use client"; 

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ContextFeaturesProvider } from "@/context/ContextFeatures";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ContextFeaturesProvider>
          <GlobalStyle />
          {children}
        </ContextFeaturesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}