import React from "react";
import Error404Card from "../Component/Error404Card";
import Footer from "../Component/Footer"
import NavBarcomp from "../Component/NavBar";

const Error404 = () => {

    return(
       <>
        <NavBarcomp/>
        <Error404Card/> 
        <Footer />
       </>
    )
}
export default Error404;