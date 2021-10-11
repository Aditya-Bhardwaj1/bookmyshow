import React from "react";
import Navbar from "../components/Navbar/navbar.component";
//Components

const DefaultLayout = (props) => {
    return (
        <>  
            <Navbar />
            {props.children}
        </>
    );
};

export default DefaultLayout;