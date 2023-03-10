import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  title: {
    marginTop: theme.spacing(3)
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

export default function ContactPage() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // make a server request or send an email with the form data
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />
     
      <Button variant="contained" color="primary" className={classes.button} type="submit" sx={{backgroundColor:"#ffab40"}}>
        Submit
      </Button>
    </form>
  );
}
