import React from 'react';
import {FaMobileAlt} from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
            <div className='contanier'>
                <link to={"/"} className="navbar-brand">
                    <FaMobileAlt/>Contact <span className='text-warning'>Managerv</span> </link>
            </div>

        </nav>
    </div>
  )
}

export default Navbar;