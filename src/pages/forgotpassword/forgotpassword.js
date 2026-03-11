import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../../style/forgotpassword.css";
import nav_icon from "../../assests/images/nav_icon.png"


function Forgotpassword(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleforgotpassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/forgotpassword", {
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
   
      <form onSubmit={handleforgotpassword}>
      
<div className="outer3">
        <div className="mid3">
          
           <img src={nav_icon} alt="Logo" className="logo_login3"/>
             <div className="inner3">
               
                <h1 className="bighead33">forgot password?</h1>


        <h2 className="head3">no worries</h2>

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
          placeholder="new password"
          onChange={(e) => setPassword(e.target.value)}
           className="inputid"
        />
        
         <br></br>
        <br></br>
        <button type="submit" className="button">Resetpassword</button>
                    </div>
       </div>
      </div>
      </form>
 
  );
  
}

export default Forgotpassword