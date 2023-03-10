import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  companyName: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  companyDescription: {
    marginTop: theme.spacing(2),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:"70px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Avatar
            className={classes.avatar}
            src="\assets/profile.png"
            alt="Company Logo"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className={classes.companyName}>
           GAB LEADS MANAGMENT SYSTEM
          </Typography>
          <Typography variant="body1" className={classes.companyDescription} justifyContent="center">
          This GAB-LEADS MANAGEMENT SYSTEM is about the franchise selling system through leads 
which usually requires a lot of effort. Through this app we will import leads from the source. And we 
will filter out our leads through different stages to make it mature. This Application Manages All the 
leads according to the time zone, Age, Profession, Education, Experience And then provide a schedule 
to call x number of leads in a day with time stamp. This app will provide you information about how 
many of them are interested in buying franchise on the basis of data that how many of them have 
opened the email, how many of them have replied to the email and how many of them have ignored 
the email. From here corporate offices will monitor the reachability of there promotions through 
Email, SMS etc. Statistics and Probability are also involved for the status of success of finding best 
investor.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}