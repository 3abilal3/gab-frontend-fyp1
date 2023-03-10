import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import DrawerComp from './DrawerComp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
const Header = () => {
     const [value, setValue] = useState();
     const pages=["Products" ,"Services","About","Contact"]

     const theme=useTheme();
     const isMatch=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ flexGrow: 1 }}>

    <AppBar position="static">
      <Toolbar>
 {/* <img src={logo2} alt="/" style={{ width: "100px", height: "80px" }}/> */}
      {
        isMatch? (
            <>
              <Typography>
               
              </Typography>
              <DrawerComp/>
            </>
        ):(
          <>
                   
          <Tabs 
            textColor="inherit"
            value={value}
            onChange={(e,value)=> setValue(value)}
            indicatorColor="secondary"
            sx={{marginLeft:'auto'}}
            >
          {
            pages.map((page,index)=>(
         
         <Tab key={index} label=<Link to={`/${page}`}>{page} </Link>/>
       )
       
         )
      }
          </Tabs>

          <Button sx={{marginLeft:"auto" ,color:"white"}} varient="contained" color="secondary" > <Link to='/login'>Login</Link>{" "}</Button>
          <Button sx={{marginLeft:"10px" ,color:"white"}} varient="contained" color="secondary" ><Link to ='/register'>Sign Up{" "}</Link></Button>
      

          </>
        )
      }
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
        </IconButton>

      </Toolbar>
     
    </AppBar>
  </Box>
  )
}

export default Header