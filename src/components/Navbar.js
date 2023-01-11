import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    WEB CV <i className="fa-solid fa-thumbs-up fa-5x"></i>
                </Link>
            </div>
        </nav>
        </>
    );
}

export default Navbar;