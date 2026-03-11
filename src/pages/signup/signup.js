import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../../style/signup.css";
import nav_icon from "../../assests/images/nav_icon.png"




function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword]= useState("");
 const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact, password,confirmpassword }),
      });

      const data = await response.json();

      if(password!==confirmpassword){
        alert(data.message)
      }

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
    
      <form onSubmit={handleSignup}>
        <div className="outer2">
         <div className="mid2"> 
           <img src={nav_icon} alt="Logo" className="logo2"/>  
            <div className="inner2">
              
              <h1 class="head">Signup</h1>

         👤 <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="inputid2"
        />
        <br/>
        <br/>
          📧 <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="inputid2"
        />
         <br/>
         <br/>

           📞 <input
          type="text"
          placeholder="Enter contact"
          onChange={(e) => setContact(e.target.value)}
          className="inputid2"
        />
        
         <br></br>
         <br/>

          🔒   <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="inputid2"
        />
          <br/>
          <br></br>
         🔒   <input
         type="password"
         placeholder="Confirmpassword"
         onChange={(e)=>setConfirmpassword(e.target.value)}
         className="inputid2"
         /> 
          <br/>
          <br></br>
          
        <button type="submit" className="button2">Signup</button>
        <br></br>
        <a href="/">Already have an account? Login </a>
     </div>
        </div>
     </div>


      </form>
    
  );
}

export default Signup;