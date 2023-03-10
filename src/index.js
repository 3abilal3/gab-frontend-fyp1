import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './MuiTheme'
import CssBaseline from '@mui/material/CssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {console.log(theme)}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



