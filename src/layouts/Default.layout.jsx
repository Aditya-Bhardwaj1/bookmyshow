import React from "react";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import Navbar from "../components/Navbar/navbar.component";
//Components


const DefaultLayout = (props) => {
    return (
        <>  
            <Navbar />
            <HeroCarousal/>
            {props.children}
        </>
    );
};

export default DefaultLayout;