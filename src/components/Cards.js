import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardDemo() {
  return (
    <div style={{margin: '25%'}}>
    <Stack direction="column" spacing={4}>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          maC
        </Typography>
        <Typography variant="h4" component="div">
         Leads Available
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can now buy maC franchise
        </Typography>
        <Typography variant="body1">
        
          <br />
          {'"To buy contact us "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Share</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Ranchers
        </Typography>
        <Typography variant="h4" component="div">
         Leads Available
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can now buy Ranchers franchise
        </Typography>
        <Typography variant="body1">
        
          <br />
          {'"To buy contact us "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Share</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          TCS
        </Typography>
        <Typography variant="h4" component="div">
         Leads Available
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can now buy TCS franchise
        </Typography>
        <Typography variant="body1">
        
          <br />
          {'"To buy contact us "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Share</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Ideas
        </Typography>
        <Typography variant="h4" component="div">
         Leads Available
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can now buy Ideas franchise
        </Typography>
        <Typography variant="body1">
        
          <br />
          {'"To buy contact us "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Share</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          Designer Club
        </Typography>
        <Typography variant="h4" component="div">
         Leads Available
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You can now buy Designer Club franchise
        </Typography>
        <Typography variant="body1">
        
          <br />
          {'"To buy contact us "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"white"}}>Share</Button>
      </CardActions>
    </Card>
    </Stack>
    </div>

  );
}