
import { RecoilRoot, useRecoilState, useSetRecoilState, atom } from "recoil";
import { TextField, Typography, Button } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from "./Footer";
import axios from "axios"

import { useState, useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Userbar from "./Userbar";



function Todo() {

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/todo/delete/${_id}`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      alert(response.data.message);
      func();
    } catch (error) {

      console.error(error);
      alert("Error occure !!!");
    }

  }
  
  const theme1 = createTheme({
    palette: {
      primary: {
        main: "#161A30", // changes the primary color
      },
    },
  });
  const func = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/todos/",{
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      if (response.status >= 200 && response.status < 300) {
        // Handle the successful response
        name=response.data.name;
        setTodo(response.data.todo);
      }
    } catch (error) {
      console.error(error);
      alert("some thing went wrong in useEffect");
    }
  }
  const handleTitle=(event)=>{
    setTitle(event.target.value);
  }
  const handleDescription=(event)=>{
    setDescription(event.target.value);
  }

  const handleAdd=async()=>{
    try {
      const response = await axios.put("http://localhost:3000/user/todo/add", {title,description}, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      alert(response.data.message);
      func();
    } catch (error) {

      console.error(error);
      alert("Error occure !!!");
    }
  }
  const [title, setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    func();
  }, [])

  return <>
    <Userbar />
    <br/>
      <br/>
    <div style={{ display: "flex", justifyContent: "center" }}>
      
      <div style={{ display: "flex", justifyContent: "center", width: "95%" }}>
        <TextField
          label="Title"
          variant="outlined"
          color="primary"
          value={title}
          onChange={handleTitle}
          sx={{
            minWidth: '200px',
            width: '43%',
            backgroundColor: '#F0ECE5', // Set the background color
            borderColor: '#161A30', // Set the border color
            '& input': {
              color: '#161A30', // Set the text color
            },
          }}
          style={{ margin: "10px" }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={handleDescription}
          style={{ minWidth: '200px', width: '43%', color: "#161A30", margin: "10px" }}
        // Adjust the range as needed
        />
        <ThemeProvider theme={theme1}>

          <Button variant="outlined" size="large" style={{ padding: "12px 30px 12px 30px", marginRight: "10px", width: '9%', backgroundColor: "#161A30", color: "#F0ECE5", margin: "10px" }} onClick={handleAdd} >Add</Button>
        </ThemeProvider>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "95%" }}>
        {todo.map((value) => {
          return <Card sx={{ width: "100%", padding: "0px", margin: "25px" }}>
            <CardContent >
              <div style={{ display: 'flex', justifyContent: "center" }}>
                <div style={{ width: "86%" }}>
                  <Typography variant="h4" component="div" style={{ margin: "0px" }}>
                    {value.title}
                  </Typography>

                  <Typography variant="body2" style={{ margin: "0px" }}>
                    {value.description}
                    <br />
                   
                  </Typography>
                </div>
                <Button variant="outlined" size="large" style={{ padding: "12px 30px 12px 30px", marginRight: "10px", width: '9%', backgroundColor: "#161A30", color: "#F0ECE5", margin: "10px" }} onClick={() => { handleDelete(value._id) }} >Delete</Button>
              </div>
            </CardContent>


          </Card>
        })}

      </div>
    </div>
    <Footer/>

  </>

}

export default Todo;