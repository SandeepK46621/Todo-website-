import {useState}from "react"
import { RecoilRoot, useRecoilState, useSetRecoilState, atom } from "recoil";
import { TextField, Typography, Button, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landingbar from "./Landingbar";
import Footer from "./Footer";
import axios from "axios"
import { useNavigate } from "react-router-dom";

/*
const handleUsername=(event)=>{
    var usernamechange = useSetRecoilState(usernameState);
    usernamechange(existing=> event.target.value);
}
const handlePassword=(event)=>{
    var passwordchange = useSetRecoilState(passwordState);
    passwordchange(existing=> event.target.value);
}
const handleName=(event)=>{
    var namechange = useSetRecoilState(nameState);
    namechange(existing=> event.target.value);
}

*/

function Registerpage() {
    const theme1 = createTheme({
        palette: {
            primary: {
                main: "#161A30", // changes the primary color
            },
        },
    });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleClick = async() => {
        try{
            const response =await axios.post("http://localhost:3000/user/login",{},{headers:{username:username, password:password}});
            if (response.status >= 200 && response.status < 300) {
                // Handle the successful response
                localStorage.setItem('token',response.data.Autherization);
                navigate("/user/todo")
              }
        }catch(error){
            console.error(error);
        }
    }


    return <div >

            <Landingbar />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <Card sx={{ minWidth: 275 }} style={{ padding: "50px" }}  >
                    <CardContent >
                        <Typography variant="h4" component="h4" style={{ color: "#161A30" }}>
                            Login
                        </Typography>
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            value={username}
                            onChange={handleUsername}
                        />
                        <br />
                        <br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <br />
                        <br />
                        
                    </CardContent>
                    <div style={{ display: "flex", justifyContent: "center" }} >

                        <CardActions>
                            
                            <ThemeProvider theme={theme1}>

                                <Button variant="outlined" style={{ marginRight: "10px" }} onClick={handleClick} >Login</Button>
                            </ThemeProvider>

                        </CardActions>
                    </div>

                </Card>

            </div>
            <Footer />

    </div>


}


export default Registerpage;


