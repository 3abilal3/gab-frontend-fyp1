import React from 'react'
import Dashboard from '../pages/Dashboard';
import ContComp from './ContComp';
import Header from './Header'
import UiDesign from './UiDesign';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { orange } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import Navbar2 from './Navbar2';
import StickyFooter from './StickyFooter';

const Landing = () => {
  const useStyles = makeStyles({
    btn: {
      backgroundColor: 'none'
    }
  },
  );
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: '#000000',
      },
    },
  });
  
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Dashboard /> */}
      </ThemeProvider>
    </>
  )
}

export default Landing