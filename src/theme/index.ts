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
    },
    h2: {
      color: colors.grey700,
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      color: colors.grey700,
      fontSize: '2.125rem',
      fontWeight: 600,
      h4: {
        color: colors.grey50,
        fontSize: '1.525rem',
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
      fontSize: '2.125rem',
      fontWeight: 600,
    },
    subtitle2: {
      color: colors.grey50,
      fontSize: '1.4rem',
    },
    body1: {
      color: colors.grey50,
      fontSize: '1.225rem',
    },
    body2: {
      color: colors.grey50,
      fontSize: '1.2rem',
    },
    button: {
      color: colors.grey300,
    },
    caption: {
      color: colors.grey500,
    },
    overline: {
      color: colors.grey500,
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
          color: colors.grey200,
        },
        input: {
          color: colors.grey200,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: colors.grey200,
          },
        },
      },
    },
  },
  // shape: {
  //   borderRadius: 8,
  // },
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default theme;
