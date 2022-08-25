import React from 'react';
import {Link} from "react-router-dom";
import {FaMobileAlt} from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
            <div className='contanier'>
                <Link to={"/"} className="navbar-brand">
                    <FaMobileAlt className='m-3 ' />Contact <span className='text-warning'>Manager</span> </Link>
            </div>

        </nav>
    </div>
  )
}

export default Navbar;