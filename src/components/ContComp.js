import { Box, Container } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'
import { orange } from '@mui/material/colors';



const ContComp = () => {
    const lightorange=orange[200];
    return (
        <>   
        <Box sx={{
            width: "100%",
            height: "100vh",
            color: "black", 
            backgroundColor: {lightorange}
        }}>


                <Typography>
                    Hello gabars
                </Typography>
          
        </Box>
        <Typography>lorem asfsdfa dfsfasdfasdfasdf asd fdfsasfasdf
        </Typography>
        </>

    )
}

export default ContComp