import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
         <header className="bg-red-950 p-4 flex justify-between items-center">
            <div className="text-white text-xl">
               <Link to="/" className="text-white">
                  <h1>RentWheelz</h1> 
               </Link> 
            </div>
            <div>
                <Link to="/login" className="text-white">
                    Login
                </Link>
            </div>
        </header>
        </React.Fragment>
    );
 
}
export default Navbar;