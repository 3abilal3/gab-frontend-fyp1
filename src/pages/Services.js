import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const services = [
  {
    title: 'Leads Managment',
    description: 'It is used for  managment of leads with respect to time and days'
  },
  {
    title: 'Follow up leads',
    description: "It will have a good follow up on leads"
  },
  {
    title: 'On boarding user',
    description: 'We will do onboarding for the user'
  },
];

export default function ServicesPage() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:"100px"}}>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={4} key={service.title}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}