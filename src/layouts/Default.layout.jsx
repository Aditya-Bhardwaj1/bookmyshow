import React from "react";
<<<<<<< HEAD
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import Navbar from "../components/Navbar/navbar.component";
//Components


=======
import Navbar from "../components/Navbar/navbar.component";
//Components

>>>>>>> 51101075818424cdfd4ce13d873e172708763e72
const DefaultLayout = (props) => {
    return (
        <>  
            <Navbar />
<<<<<<< HEAD
            <HeroCarousal/>
=======
>>>>>>> 51101075818424cdfd4ce13d873e172708763e72
            {props.children}
        </>
    );
};

export default DefaultLayout;