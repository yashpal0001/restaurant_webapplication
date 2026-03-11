import React from "react";
import Headers from "./header";
// import Footer from "./footer";

function Layout({children}){
return(

<>
<Headers/>
<div>{children}</div>


{/* <Footer/> */}
</>

)
}

export default Layout;