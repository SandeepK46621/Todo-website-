import React from 'react'
import Landingbar from './Landingbar.jsx';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from './Imageslide.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from "@mui/material"
import Footer from './Footer.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
/**/
function Landing(){
  const navigate = useNavigate();
  const isKeyExist = (key) => {
    const item = localStorage.getItem(key);
    return item !== null;
  };
  const func = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/me", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      if (response.status >= 200 && response.status < 300) {
        // Handle the successful response
        navigate("/user/todo");
      }
    } catch (error) {
      console.log(error);
    }


  }
  
  if(isKeyExist("token")) {

    func();

  }
  function handleregister() {
    
    navigate("/user/register");
  };
  function handleLogin() {
    
    navigate("/user/login");
  };
    const theme1 = createTheme({
        palette: {
          primary: {
            main: '#161A30', // changes the primary color
          },
        },
      });
    return<div >
        <Landingbar/>
        <div style={{display:"flex" , justifyContent:"center"}}>
        <Typography variant="h1" component="h1" style={{marginTop:"200px"}}>
            Always be on time
          </Typography>
      
    </div>
    <div style={{display:"flex" , justifyContent:"center" , marginTop:"100px"}}>
    <ThemeProvider theme={theme1}>
          <Button variant="outlined" style={{ marginRight: "10px" }} onClick={handleregister}>Register</Button>
        </ThemeProvider>
                <ThemeProvider theme={theme1}>
                <Button variant="contained"size="large" onClick={handleLogin}>Login</Button>
        </ThemeProvider>
      </div>
      < div>
      <Footer/>
      </div>
    </div>
    
}


export default Landing;