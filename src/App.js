import React from "react";
import {BrowserRouter  as Router , Routes , Route} from "react-router-dom"
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Forgotpassword from "./pages/forgotpassword/forgotpassword";
import Profile from "./pages/profile/profile";




function App() {
  return (
  <>
  <Router>
     <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
        <Route path="/profile" element={<Profile/>}></Route>
     
     </Routes>
  </Router>
  
  
  </>
  );
}

export default App;
  