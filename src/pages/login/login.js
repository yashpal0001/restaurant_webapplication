
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext";

import "../../style/login.css";
import nav_icon from "../../assests/images/nav_icon.png"



function Login (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useAuth();
   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/Home")
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   
      <form onSubmit={handleLogin}>
      
<div className="outer">
      {/* <Headers></Headers> */}
        <div className="mid">
          
           <img src={nav_icon} alt="Logo" className="logo_login"/>
             <div className="inner">
               
                <h1 className="bighead">Welcome back</h1>


        <h2 className="head ">Login</h2>

          📧<input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
           className="inputid"
        />
        <br></br>
         <br/>
         🔒  <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
           className="inputid"
        />
        <a href={"/forgotpassword"} className="forgot">forgotpassword?</a>
         <br></br>
         <br></br>
        
        <button type="submit" className="button">Login</button>
         
        <br></br>
          <a href={"/Signup"}> Don't have an account? signup</a>
          {/* <p className="text-sm mt-3">Don’t have an account? <button className="text-blue-600 cursor-pointer" onClick={switchToSignup}>Signup</button></p> */}

          
                    </div>
       </div>
      </div>
      </form>
 
  );
  
}







export default Login

