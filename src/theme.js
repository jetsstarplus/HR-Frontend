import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#292f45',
      
    },
    text:{
      primary: '#222',
      secondary: '#444',
      tertiary: '#777',
      main: '#222'
    },
    primaryLighter:{
      main: '#292f45e4'
    },
    secondary: {
      main: '#ddd',
      main1: '#eee',
      supp: '#EA2329',
    },
    tertiary:{
      main: '#610094', 
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;