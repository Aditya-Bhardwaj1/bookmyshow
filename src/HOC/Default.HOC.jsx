import React from "react";
import { Route } from "react-router-dom";
<<<<<<< HEAD

// Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
=======
//layout
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = ({ component, ...props }) => {
    return (
    <div>
        <Route {...props} />
    </div> 
    );
>>>>>>> 51101075818424cdfd4ce13d873e172708763e72
};

export default DefaultHOC;