import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NavSm= () => {
    return(
        <>
        <div className="text-white">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 tect-xs flex items-center">Benguluru<BiChevronRight/>
                </span>
            </div>
        </div>
        </>
    );
};
const NavMd= () => {};
const NavLg= () => {};

 
 const Navbar = () => {
     return (
         <>
          <nav className="bg-bms-700 p-4">
           <div className="md:hidden">{/* Mobile Screen */}
           <NavSm/>
           </div>
           <div className="md:hidden md:flex lg:hidden">{/* Medium/tab Screen */}</div>
           <div className="lg:flex">{/* Large Screen */}</div>
           </nav>
         </>
     );
 };

 export default Navbar;