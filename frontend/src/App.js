
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import NavBar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react'
import Signup from './components/Signup';

function App() {

  const [isLoggedin, setisLoggedin] = useState(false);
 
const handlelogout=()=>{
  localStorage.removeItem("token");
  setisLoggedin(false);
}

const handleLogin=(value)=>{
  setisLoggedin(value);

}


  return (
   <>
     <BrowserRouter>
     {!isLoggedin? 
     <Routes>
     <>
     <Route path="/" element={<Login handleLogin={handleLogin}/>} />
     <Route path="/signup" element={<Signup handleLogin={handleLogin}/>} />
     </>
     </Routes>
     :
     <>
     <NavBar handlelogout={handlelogout} title="Notes App"/>
     <Routes>
     
    
    <Route path="/" element={<Home/>} />
      </Routes>
    </>
      }
  </BrowserRouter>
   
  </>
  );
}

export default App;
