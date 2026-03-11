import React from "react";
import brand2 from "../../assests/images/homepage/brand2.png"
import Carousel from 'react-bootstrap/Carousel';
import "../../style/section1.css"
import homepage1 from "../../assests/images/homepage/homepage1.png"
import homepage2 from "../../assests/images/homepage/homepage2.png"
import homepage3 from "../../assests/images/homepage/homepage3.png"


function Section1(){
    return(
    <section1  className="hero_section">
           <div className="hero_carousel">
             <Carousel>
                <Carousel.Item interval={5000}>
                 <img src={brand2} className="hero_carousel"  alt="brand2"/>
                 </Carousel.Item>
                     <Carousel.Item interval={500}>
                       <img src={homepage1} className="hero_carousel" alt="homepage1"/>
                       </Carousel.Item>
                         <Carousel.Item interval={500}>
                           <img src={homepage2} className="hero_carousel" alt="homepage2"/>
                           </Carousel.Item>
                             <Carousel.Item >
                              <img src={homepage3}className="hero_carousel" alt="homepage3"/>
                              </Carousel.Item>
                              </Carousel> 
                               </div>     
    </section1>
    )
}

export default Section1;