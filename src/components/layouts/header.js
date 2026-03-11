import React, { useState } from "react";
import"../../style/headerstyle.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import fav_icon from "../assests/images/fav_icon.png"
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import nav_icon from "../../assests/images/nav_icon.png"





function Headers(){

  const [nav,setNav]= useState();
  const [show, setShow] = useState(false);


const handleShow = () => setShow(true);

  


  // sroll navbar

  const changeValueOnScroll = ()=>{
   const scrollValue = document?.documentElement?.scrollTop;
   scrollValue > 100? setNav(true): setNav(false)
  }

window.addEventListener("scroll",changeValueOnScroll);


return(
<header>

<Navbar collapseOnSelect expand="lg" className={`${nav===true? "sticky":""}`}>
      <Container>
        <Navbar.Brand href="#home">
            <Link to="/home" className="logo">
             <img src={nav_icon} alt="logo" className="logo" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">home</Nav.Link>
            <Nav.Link  as={Link} to="/about">About</Nav.Link>
            <Nav.Link  as={Link} to="/dining">Dining</Nav.Link>
            <Nav.Link  as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link  as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link  as={Link} to="/contact">contact</Nav.Link>
              <Nav.Link  as={Link} to="/">
                  <div className="cart">
                       <i class="bi bi-bag"></i>
                       <em className="roundpoint">2</em>
                  </div>
              </Nav.Link>
              
          <Nav.Link onClick={handleShow} style={{cursor:"pointer"}}>
                 <i className="bi bi-person-circle"></i>

                 <Offcanvas show={show} placement="end" className="custom-offcanvas">
                    <Offcanvas.Header >
                      
                   {/* <Offcanvas.Title className="custom-heading">User Menu</Offcanvas.Title> */}
                      <h1>Dashboard</h1>
                     </Offcanvas.Header>

                       <Offcanvas.Body className="links">
                         <Nav className="flex-column">
                          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                           <Nav.Link as={Link} to="/fooddelivery">Food Delivery</Nav.Link>
                            <Nav.Link as={Link} to="/dinningexp">dinning experience</Nav.Link>
                             <Nav.Link as={Link} to="/giftcard&credits">Giftcards& credits</Nav.Link>
                              <Nav.Link as={Link} to="/royallanternforent">royal Lantern for ent</Nav.Link>
                               <Nav.Link as={Link} to="/logout">Log out</Nav.Link>


                            </Nav>
                      
                          </Offcanvas.Body>
                       
                           </Offcanvas>
                    </Nav.Link>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      

</header >


)

}

export default Headers;