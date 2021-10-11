import React from "react";
import { Route } from "react-router-dom";
//layout
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = ({ component, ...props }) => {
    return (
    <div>
        <Route {...props} />
    </div> 
    );
};

export default DefaultHOC;