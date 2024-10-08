'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@/theme';

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
