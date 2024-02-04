import React from 'react'
import { Button, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Register from './Register';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function Userbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const navigate = useNavigate();
    const handleClose = () => {
        setAnchorEl(null);
        localStorage.removeItem('token');
        navigate("/")
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

    return<div style={{ backgroundColor:"#161A30",padding:'10px', borderRadius:"0px 0px 5px 5px"}}>
    <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"#161A30", padding:"10px"}}>
            <div>
            <ThemeProvider theme={theme2}>
                <Typography variant="h4" component="h4">
                    Todo
                </Typography>
                
                </ThemeProvider>

            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                
                <ThemeProvider theme={theme1}>
                <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Profile
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
                </ThemeProvider>
            </div>

        </div>

        </div> 
}


export default Userbar;