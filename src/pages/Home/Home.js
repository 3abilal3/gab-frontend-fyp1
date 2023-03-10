import React from 'react'
import { Grid } from '@mui/material';
import { Box, Typography, Button } from '@mui/material';
// import ssm from ""
import { Stack } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Grid container spacing={1} mt={8} sx={{ height: "70vh", backgroundColor: 'white' }}>
        <Grid item md={6}>
          <Box sx={{
            display: "flex",
            height: "70vh",
            alignItems: "center",
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px' }}>
              <Typography variant="h3" color="initial">GAB LEADS MANAGMENT SYSTEM </Typography>
              <Typography variant="body1" color="initial" sx={{mt:"20px"}}>GAB LMS is about managing leads for selling franchise for differenet busineses<br /> Click here for signing up  </Typography>
              <Box>
                <Link component={NavLink} to="/login" style={{ color: "black", textDecoration: 'none' }}>
                  <Button variant="text" color="black" sx={{ width: '200px', padding: "10px", marginTop: '30px' }}>
                    Sign Up
                  </Button>
                </Link>
                <Link component={NavLink} to="/register" style={{ color: "black", textDecoration: 'none' }}><Button variant="text" color="black" sx={{ width: '200px', padding: "10px", marginTop: '30px', marginLeft: '20px', }}>
                  Log in
                </Button>
                
                </Link>
                
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box>
            <img src="\assets\ssm.jpg" alt='/' style={{ width: "580px", marginTop: "30px" , marginBottom:"100px", textAlign: 'center' }} />

          </Box>
        </Grid>
      </Grid>
      <Box >
        <Typography variant="h3" sx={{ justifyContent: 'center', alignItems: "center", mt: '100px', mt: "50px", mr: "50px", ml: "50px" }}>
          Your Automated Lead Management Solution</Typography>


        <img src='.\assets/adv.jpg' alt="/" style={{ flex: "row", justifyContent: 'center', width: "700px", height: "500px" ,marginRight:"100px"}} />
      </Box>

      {/* Container */}
      <Grid container spacing={1} mt={8} sx={{ backgroundColor: 'rgba(0,20,96,0.9)', pt: "80px", pb: "150px" }}>
        <Grid item xs={12} textAlign='center'>

          <Typography variant="h1" color="white" textAlign='center'>GAB LMS</Typography>
          <Typography variant="body1" color="white" textAlign='center'>GAB LMS is about managing leads for selling franchise for differenet busineses</Typography>
        </Grid>
        <Grid container mt={4} color='white' sx={{ flex: "row", justifyContent: 'center' }} >
          <Grid item md={3} >

            <Box sx={{ height: '100px', width: '100', marginRight: '10px', flex: "row", justifyContent: 'center', alignItems: "center" }}>
              <img src='.\assets/dnld.png' alt="/" style={{ flex: "row", justifyContent: 'center', alignItems: "center" }} />
            </Box>
          </Grid>


        </Grid>
      </Grid>

    </>
  )
}

export default Home