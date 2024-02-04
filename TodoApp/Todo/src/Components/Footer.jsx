import React from 'react'
import Landingbar from './Landingbar.jsx';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from './Imageslide.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from "@mui/material"



function Footer(){
    const theme2 = createTheme({
        typography: {
          // Customize the styles for different Typography variants
          h6: {
            color: '#F0ECE5', // changes the color for h1
          },
        },
      });
    
    return <div style={{position: "absolute",
  bottom: "0",}}>
    <div style={{display:"flex", justifyContent:"center" ,backgroundColor:"#161A30", width:"100vw"}}>
        <div style={{padding:"10px"}}>
        <ThemeProvider theme={theme2}>
        <Typography variant="h6" component="h6">
                    Project By Sandeep Prajapati
         </Typography>
         </ThemeProvider>
         </div>
         </div>
    </div>
                
               
         
}

export default Footer;