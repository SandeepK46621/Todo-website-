import React from 'react'
import { Button, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Register from './Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Landingbar() {
  const navigate = useNavigate();
  function handleLogin() {
    
    navigate("/user/login");
  };

  
  const theme1 = createTheme({
    palette: {
      primary: {
        main: '#F0ECE5', // changes the primary color
      },
    },
  });
  const theme2 = createTheme({
    typography: {
      // Customize the styles for different Typography variants
      h4: {
        color: '#F0ECE5', // changes the color for h1
      },
    },
  });

  return <div style={{ backgroundColor: "#161A30", padding: '10px', borderRadius: "0px 0px 5px 5px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#161A30", padding: "10px" }}>
      <div>
        <ThemeProvider theme={theme2}>
          <Typography variant="h4" component="h4">
            Todo
          </Typography>

        </ThemeProvider>

      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Register/>
        <ThemeProvider theme={theme1}>
          <Button variant="outlined" onClick={handleLogin}>Login</Button>
        </ThemeProvider>
      </div>

    </div>

  </div>
}


export default Landingbar;