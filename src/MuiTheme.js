import { createTheme } from '@mui/material/styles';

const font = 'Nunito';

const theme = createTheme({
  palette: {
    // background: {
    //   default: "#e4f0e2"
    // },
    mode: 'light',
    primary: {
      main: '#ffab40',
    },
    secondary: {
      main: "#FC624D"
    },
    black: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: font,
    button: {
      background: 'linear-gradient(45deg, #ffab40 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 30,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textTransform: 'none'
    }
  },

});



export default theme;
