import React, { useState } from 'react';
import './Navbar.scss';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toogleMenu = () => {
        setShowMenu(!showMenu);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }
    return(
        <nav className="container navbar">
            <div className="logo">
                <BsFillRocketTakeoffFill size={35} color='#fff' />
                <p className="logo-text">
                Harry.<span>com</span>
                </p>
            </div>
            <menu>
                <ul className="nav-links" id={showMenu ? 'mobile-nav-links' : 'hide-mobile-nav-links'}>
                <li onClick={hideMenu}>
                    <a href="#">Home</a>
                </li>
                <li onClick={hideMenu}>
                    <a href="#">Features</a>
                </li>
                <li onClick={hideMenu}>
                    <a href="#">Download</a>
                </li>
                <li onClick={hideMenu}>
                    <a href="#">Subscribe</a>
                </li>
                <li className="nav-btn" onClick={hideMenu}>
                    <a className="btn btn-orange" href="#">
                    Get Started
                    </a>
                </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toogleMenu}>
                {showMenu ? (
                    <RiCloseLine color='#fff' size={27} />
                ) : (
                    <AiOutlineBars color='#fff' size={27} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
