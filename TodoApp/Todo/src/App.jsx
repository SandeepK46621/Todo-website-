import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css'
import Landing from './Components/Landing.jsx'
import Landingbar from './Components/Landingbar.jsx'
import Register from './Components/Register.jsx'
import Registerpage from './Components/Registerpage.jsx'
import Loginpage from './Components/Loginpage.jsx'
import Todo from './Components/Todos.jsx'
function App() {
 

  return<Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path="/user/register" element={<Registerpage/>}></Route> 
        <Route path='/user/login' element={<Loginpage/>}></Route>
        <Route path='/user/todo' element={<Todo/>}></Route>
      </Routes>
    </Router>

}

export default App
