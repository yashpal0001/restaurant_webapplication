import React from "react";
import Layout from "../../components/layouts/layout"
import "../../style/home.css"
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

const Home = () =>{
return(
<>
<Layout>
    {/* home section 1 hero */}
 <Section1/>

   {/* home section about */}

    <Section2/>

    {/* home sction menu */}

    <Section3/>

     {/* home section 4 */}

     <Section4/>
</Layout>
</>
)

}

export default Home;