import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import salad from "../../assests/images/homepage/salad.jpg"
import food from "../../assests/images/homepage/food.png"
import fast_delivery from "../../assests/images/homepage/fast_delivery.png"
const mockData=[
    {
        image:food,
        title:"original",
        paragraph:`A Taste of Dynasty
Savor the rich culinary heritage of our ancestors, brought to life with artisanal precision. Each dish is a masterpiece, handcrafted to transport you to an era of imperial feasts and timeless tradition. Experience the perfect harmony of authentic flavors and royal elegance in every bite`
     },

     {
        image:salad,
        title:"food quality",
        paragraph: `Pure Ingredients, Masterful Craft. We believe that great food starts with exceptional ingredients. Our chefs combine traditional techniques with the highest quality produce to serve you an unforgettable, healthy, and authentic Chinese experience.`
     },
     {
        image:fast_delivery,
        title:"fast delivery",
        paragraph:`Experience the luxury of The Royal Lantern at home. We ensure every order is dispatched with priority and special insulated packaging to guarantee your meal arrives hot, fresh, and on time.`
     }
]



const Section2 =()=>{
return(<>
<section className="about_section">
  <Container>
    <Row>
        <Col lg={{span:8,offset:2}} className="text_center">
        <div className="text">
         <h2>
            Where Tradition Meets Radiance
         </h2>
         <p>
            At The Royal Lantern, we believe that dining is an art form illuminated by heritage. Inspired by the golden glow of ancient festivities, our cafe brings a refined touch to Chinese culinary traditions. Every dumpling is hand-crafted, every tea leaf is carefully selected, and every visit is designed to make you feel like royalty under the light of the lantern.
         </p>
         <Link to="/" className="btn order_now">
             Explore full Menu
         </Link>
         </div>
        </Col>
    </Row>
    </Container>
</section>

<section className="about_wrapper">
    <Container>
        <Row className="justify-content-md-center">{mockData.map((cardData,index)=>(
            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
              <div className=" about_box test-center">
                  <div className="about_icon">
                     <img src={cardData.image} className="img-fulid" alt="icon"/>
                  </div>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.paragraph}</p>
              </div>
            </Col>
       ))} </Row>
    </Container>
</section>





</>)
}

export default Section2