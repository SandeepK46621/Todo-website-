import react from "react";
import { Button, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


function Register(){
    const theme1 = createTheme({
        palette: {
          primary: {
            main: '#F0ECE5', // changes the primary color
          },
        },
      });
      const navigate= useNavigate();
      function handleClick(){

        navigate("/user/register");
      };
    

    return <ThemeProvider theme={theme1}>
    <Button variant="outlined"  style={{marginRight:"10px"}} onClick={handleClick}>Register</Button>
    </ThemeProvider>
}


export default Register;