import * as React from 'react';


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { purple } from '@mui/material/colors';

import { IconButton } from '@mui/material/';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';


import TextField from '@mui/material/TextField';


const UiDesign = () => {
  const useStyles = makeStyles({
    btn:{
   backgroundColor:'none'
    }
     },
    
   );
   
   const theme = createTheme({
     palette: {
       primary: {
         main: orange[400],
       },
       secondary: {
         main: '#f44336',
       },
     },
   });

const classes=useStyles();
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const [age, setAge] = React.useState('');

const handleChange = (event) => {
setAge(event.target.value );
};
const GreenSwitch = styled(Switch)(({ theme }) => ({
'& .MuiSwitch-switchBase.Mui-checked': {
color: pink[600],
'&:hover': {
  backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
},
},
'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
backgroundColor: pink[600],
},
}));
    
return(
<div>
<Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" />
</Box>
<Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      error
      id="outlined-error"
      label="Error"
      defaultValue="Hello World"
    />
    <TextField
      error
      id="outlined-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
    />
  </div>
  <div>
    <TextField
      error
      id="filled-error"
      label="Error"
      defaultValue="Hello World"
      variant="filled"
    />
    <TextField
      error
      id="filled-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      variant="filled"
    />
  </div>
  <div>
    <TextField
      error
      id="standard-error"
      label="Error"
      defaultValue="Hello World"
      variant="standard"
    />
    <TextField
      error
      id="standard-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      variant="standard"
    />
  </div>
</Box>
  <div>
  <Switch {...label} defaultChecked className={classes.btn}  color="primary"/>
  <Switch {...label} color="primary"/>
  <Switch {...label} disabled defaultChecked color="secondary" />
  <Switch {...label} disabled color="primary"/>
  <Switch {...label} defaultChecked color="secondary"/>
<Switch {...label} defaultChecked color="secondary" />
<Switch {...label} defaultChecked color="warning" />
<Switch {...label} defaultChecked color="default" />
<GreenSwitch {...label} defaultChecked />

</div>
<FormGroup>
<FormControlLabel control={<Switch defaultChecked  className="switch"/>} label="Label" />
<FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup>
  <div>simple Button :-
    <Button variant="contained" aria-label="secondary">Hello World</Button>
  </div>
  <Box sx={{ width: '100%' }}>
    <FormControl >
      <InputLabel id="demo-simple-select-label" sx={{MaxWidth:"100px" }}>Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>
  <div>disabled button :-
    <Button disabled>Disabled</Button>
  </div>
  <div>linked button :-
    <Button href="#text-buttons">Link</Button>
  </div>
  <div>
    <Button variant="outlined" href="#outlined-buttons" color='success'>Primary</Button>
  </div>
  <div>
    <Button
      onClick={() => {
        alert('clicked');
      }}
    >
      Click me
    </Button>
  </div>

  <div>
    <Button variant="contained" component="label">
      Upload
      <input hidden accept="image/*" multiple type="file" />
    </Button>
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <CameraAltIcon />
    </IconButton>
  </div>

  <div>
    <LoadingButton loading variant="outlined">
      Submit
    </LoadingButton>
    <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
      Fetch data
    </LoadingButton>
    <LoadingButton
      loading
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="outlined"
    >
      Save
    </LoadingButton>
  </div>
  <div>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

     <ButtonGroup color="secondary" aria-label="medium secondary button group">

</ButtonGroup> 
     <Checkbox {...label} defaultChecked />
     <Checkbox {...label} />
     <Checkbox {...label} disabled />
     <Checkbox {...label} disabled checked />

     <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
     </FormGroup>
     <Checkbox {...label} defaultChecked size="small" />
     <Checkbox {...label} defaultChecked />
   <Checkbox
      {...label}
      defaultChecked
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    />
  </div>

  <div>
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="edit">
      <EditIcon />
    </Fab>
    <Fab variant="extended">
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
    <Fab disabled aria-label="like">
      <FavoriteIcon />
    </Fab>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
    </Box>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

  </div>
</div>
  )
}

export default UiDesign


     
 
        
