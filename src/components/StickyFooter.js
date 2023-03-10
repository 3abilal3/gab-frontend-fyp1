import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Contact from './../pages/Contact';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <>
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box 
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: '100px',
          mb:"0px",
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
      <Box>
      <img src=".\assets/img.png" alt="gab" style={{display: "block",height:"200px",width: "15%",marginLeft: "auto",marginRight: "auto"}}/>

      </Box>
      
  
        <Container maxWidth="sm" alignItems="center"
  justifyContent="center" sx={{ml:"480px"}}>
          <Typography variant="body1" sx={{ fontWeight: 'bold',fontSize:'30px',marginLeft:"-100px"}}>
          GAB LEADS MANAGMENT SYSTEM 
          </Typography>
          <Copyright />
          <Typography variant="body1">
          Contact us to buy and sell franchises
          </Typography>
          <Typography variant="body1">
          Your trust is our 1st priority
          </Typography>
        </Container>
      </Box>
    </Box>
    </>
  );
}