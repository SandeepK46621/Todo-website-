
import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"


function Todotamp({title ,description , _id }){
    const handleClick= async()=>{
        try{
            const response = await axios.delete(`http://localhost:3000/user/todo/delete/${_id}`,{},{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        });
        alert(response.data.message);
        }catch(error){
            
            console.error(error);
            alert("Error occure !!!");
        }
        
    }
    return <>
    <Card sx={{width:"100%", padding:"0px" ,margin:"0px"}}>
      <CardContent >
        <div style={{display:'flex',justifyContent:"center"}}>
        <div style={{width:"86%"}}>
        <Typography variant="h4" component="div"style={{margin:"0px"}}>
           {title}
        </Typography>
       
        <Typography variant="body2" style={{margin:"0px"}}>
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </div>
        <Button variant="outlined" size="large"  style={{ padding:"12px 30px 12px 30px",marginRight: "10px" , width: '9%',backgroundColor:"#161A30",color:"#F0ECE5",margin:"10px"}} onClick={handleClick} >Delete</Button>
        </div>
      </CardContent>


    </Card>
    </>
}

export default Todotamp;