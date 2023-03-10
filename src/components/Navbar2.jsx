import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import DrawerComp from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Products from './../pages/Products';
import { Stack } from '@mui/system';
const Navbar = () => {
  const [value, setValue] = useState();
  const pages = ["Products", "Services", "About", "Contact"]
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color='primary' sx={{backgroundColor:"#ffffff",height:"60px",mb:'10px'}}>
          <Toolbar style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
          <img src=".\assets/logo.png" alt="/" style={{ width: "100px", height: "60px" }} />
           
          <Stack direction="row" spacing={3}>
              <Link component={NavLink} to="/products" style={{ color: "black" ,textDecoration:'none'}}>Products</Link>
              <Link component={NavLink} to="/services" style={{ color: "black",textDecoration:'none' }}>Services</Link>
              <Link component={NavLink} to="/about" style ={{ color: "black",textDecoration:'none' }}>About</Link>
              <Link component={NavLink} to="/contact" style={{ color: "black",textDecoration:'none' }}>Contact</Link>
            </Stack> 
            <div>
            <Link component={NavLink} to="/login" style={{ color: "black",textDecoration:'none'}}><Button variant="contained" sx={{mr:'8px'}} >Log In</Button></Link>
            <Link component={NavLink} to="/register" style={{ color: "black",textDecoration:'none'  }}><Button variant="contained" sx={{mr:'10px'}}>Sign Up</Button></Link>
            </div>  
    
            
           
    </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar