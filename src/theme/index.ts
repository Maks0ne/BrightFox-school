import { createTheme } from '@mui/material/styles';

import colors from '@/assets/scss/_themes-vars.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
    },
    secondary: {
      main: colors.secondaryMain,
      dark: colors.secondaryDark,
    },
    background: {
      default: colors.backgroundDefault,
      paper: colors.primaryMain,
    },
    text: {
      primary: colors.grey500,
      secondary: colors.grey700,
      disabled: colors.grey500,
    },
    divider: colors.grey200,
  },
  typography: {
    fontFamily: `'Nunito', sans-serif`,
    h1: {
      color: colors.grey50,
      fontSize: '3.525rem',
      fontWeight: 700,
      '@media (max-width:1100px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      color: colors.grey700,
      fontSize: '2.8rem',
      fontWeight: 900,
      '@media (max-width:1100px)': {
        fontSize: '1.8rem',
      },
      '@media (max-width:650px)': {
        fontSize: '1.2rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1rem',
      },
    },
    h3: {
      color: colors.grey700,
      fontSize: '2.125rem',
      fontWeight: 900,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      '@media (max-width:650px)': {
        fontSize: '1.5rem',
      },
      h4: {
        fontSize: '2.4rem',
        fontWeight: 900,
      },
      h5: {
        color: colors.grey700,
        fontSize: '1.525rem',
      },
      h6: {
        color: colors.grey300,
      },
    },
    subtitle1: {
      color: colors.grey700,
      fontSize: '2rem',
      fontWeight: 900,
      '@media (max-width:1100px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:650px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width:400px)': {
        fontSize: '0.8rem',
      },
    },
    subtitle2: {
      color: colors.grey50,
      fontSize: '1.3rem',
      fontWeight: 800,
    },
    body1: {
      color: colors.grey50,
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      color: colors.grey50,
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    button: {
      color: colors.grey300,
    },
    caption: {
      color: colors.grey500,
    },
    overline: {
      color: colors.grey900,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.grey200,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primaryLight,
        },
        input: {
          color: colors.grey200,
          fontSize: '16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.primaryMain,
          fontWeight: 600,

          // '&.Mui-focused': {
          //   color: colors.grey50,
          // },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: colors.primaryMain,
            fontWeight: 800,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 650,
      md: 900,
      lg: 1300,
      xl: 1700,
    },
  },
});

export default theme;
