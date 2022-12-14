import React from 'react'
import {Link}  from "react-router-dom"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup(props) {
  let navigate = useNavigate();
  const handlesignup=()=>{
    
    
      const email=document.getElementById("email").value
      const password=document.getElementById("password").value
    axios.post(`http://localhost:5000/api/createuser`, { email,password })
    .then(res => {
      console.log(res.data);
      // console.log(res.data.payload.email);
      if(res.data.success)
      navigate("/", { replace: true });
      
    });
    
  }


  return (
    <>
    <section className="vh-100 gradient-custom">
   <div className="container py-5 h-100">
     <div className="row d-flex justify-content-center align-items-center h-100">
       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
         <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
           <div className="card-body p-5 text-center">
 
             <div className="mb-md-5 mt-md-4 pb-5">
 
               <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
               <p className="text-white-50 mb-5">Please enter your login and password!</p>
 
               <div className="form-outline form-white mb-4">
                 <input type="email" id="email" className="form-control form-control-lg" placeholder='Email' />
                 
               </div>
 
               <div className="form-outline form-white mb-4">
                 <input type="password" id="password" className="form-control form-control-lg" placeholder='Password'/>
                 
               </div>
 
             
 
               <button onClick={handlesignup} className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
 
               <div className="d-flex justify-content-center text-center mt-4 pt-1">
                 <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                 <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                 <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
               </div>
 
             </div>
 
             <div>
               <p className="mb-0">Already have an account? <Link to="/" className="text-white-50 fw-bold">Login</Link>
               </p>
             </div>
 
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
   </>
  )
}

export default Signup