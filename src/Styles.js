import * as React from 'react';
import { makeStyles ,createStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import { Card, cardMediaClasses } from '@mui/material';


const useStyles = makeStyles((theme) =>
    createStyles({
         container:{
       backgroundColor:theme.palette.background.paper,
       padding:theme.spacing(6,0,9),    
    },
    icon:{
   marginRight:"20px"

    },
    buttons:{
        marginTop:"40px"
    },
    cardGrid:{
padding:"20px"
    },
    card:{
height:'100%',
display:"flex",
flexDirection:"column"
    },
    
    cardMedia:{
paddingTop:'56.25'
    },
    cardContent:{
flexGrow:1,
    },
   }),
);
   
   
   
   export default useStyles