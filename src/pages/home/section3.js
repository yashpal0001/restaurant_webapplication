import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../assests/images/menu/image1.jpg"
import image2 from "../../assests/images/menu/image2.jpg"
import image3 from "../../assests/images/menu/image3.jpg"
import image4 from "../../assests/images/menu/image4.jpg"
import image5 from "../../assests/images/menu/image5.jpg"
import image6 from "../../assests/images/menu/image6.jpg"
import image7 from "../../assests/images/menu/image7.jpg"
import image8 from "../../assests/images/menu/image8.jpg"
import Card from "../../components/layouts/card";



const mockData = [

{
  id:"0001",
  image:image1,
  title:"Kung Pao Chicken",
  paragraph:"Chicken, dried chilies, peanuts, and Sichuan peppers",
  rating:4,
  price:"₹699",
},

{
  id:"0002",
  image:image2,
  title:"Steamed Dim Sum",
  paragraph:"Minced meat/shrimp, wheat wrapper, and ginger-soy seasoning",
  rating:4.5,
  price:"₹499",
},

{
  id:"0003",
  image:image3,
  title:"Mapo Tofu",
  paragraph:"Soft tofu, minced beef, chili oil, and fermented bean paste.",
  rating:5,
  price:"₹599",
},
{
  id:"0004",
  image:image4,
  title:"Crispy Spring Rolls",
  paragraph:"Shredded vegetables, thin pastry, and aromatic spices.",
  rating:4.5,
  price:"₹899",
},
{
  id:"0005",
  image:image5,
  title:"Peking Duck",
  paragraph:"Roasted duck, hoisin sauce, cucumber, and thin pancakes",
  rating:3.5,
  price:"₹499",
},
{
  id:"0006",
  image:image6,
  title:"Chow Mein",
  paragraph:"Stir-fried noodles, bok choy, soy sauce, and bean sprouts.",
  rating:4,
  price:"₹399",
},
{
  id:"0007",
  image:image7 ,
  title:"weet and Sour Pork",
  paragraph:"Crispy pork cubes, pineapple, bell peppers, and tangy glaze",
  rating:4.5,
  price:"₹450",
},
{
  id:"0008",
  image:image8 ,
  title:"Yangchow Fried Rice",
  paragraph:"Yangchow Fried Rice",
  rating:4.7,
  price:"₹350",
},
]

const renderRatingIcons =(rating)=>{
  const stars =[];

  for (let i=0;i<5;i++){
    if (rating>0.5){
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    }

    else if (rating>0&& rating<1){
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    }

    else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      
    }
  }
  return stars
}




function Section3(){
    return(
    <section className="menu_section">
           <Container>
              <Row>
                <Col lg={{span:8,offset:2}} className="text-center mb-5 ">
                  <h2>OUR ROYAL DELICACIES</h2>
                  <p className="para">Experience the art of imperial dining with our handcrafted dim sum and traditional recipes,
                     prepared daily with the finest ingredients to bring authentic Chinese flavors to your table.</p>
                </Col>
              </Row>

               <Row>
                {mockData.map((cardData,index )=>(
  
                <Card
                
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
                
                
                />
                ))}
               </Row>

               <Row className="pt-5">
                 <Col sm={6} lg={5}>
                   <div className="ads_box ads_img1 mb-5 mb-md-0">
                      <h4 className="mb-0"> Get Your free</h4>
                      <h5>Soft Drink</h5>
                       <Link to="/" className="btn btn_red px-4 rounded0">
                          Learn more
                       </Link>
                   </div>

                 </Col>

                  <Col sm={6} lg={5}>
                   <div className="ads_box ads_img">
                      <h4 className="mb-0"> Get Your free</h4>
                      <h5>Soft Drink</h5>
                       <Link to="/" className="btn btn_red px-4 rounded0">
                          Learn more
                       </Link>
                   </div>

                 </Col>
               </Row>
            </Container> 
    </section>)
}

export default Section3