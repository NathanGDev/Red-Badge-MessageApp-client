import { createMuiTheme } from '@material-ui/core/styles';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
      light: '#32cd32', //green
      main: '#32cd32', 
    },
    secondary: {
      light: '#FFFFFF', //white
      main: '#32cd32', 
      dark: '#32cd32', 
    },
    warning: {
      main: '#32cd32',
    },
    error: {
      main: '#32cd32',
    },
    success: {
      main: '#32cd32',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
<<<<<<< HEAD
=======
      light: '#15C404', //green
      main: '#15C404', 
    },
    secondary: {
      light: '#FFFFFF', //white
      main: '#FFFFFF', 
      dark: '#15C404', 
    },
    warning: {
      main: '#15C404',
    },
    error: {
      main: '#15C404',
    },
    success: {
      main: '#15C404',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    // fontFamilySecondary: "'Roboto Condensed', sans-serif"
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamily,
<<<<<<< HEAD
<<<<<<< HEAD
  // textTransform: 'uppercase',
=======
  textTransform: 'uppercase',
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
=======
  // textTransform: 'uppercase',
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: rawTheme.palette.text.primary,
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;