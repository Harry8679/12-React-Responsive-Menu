import React from 'react';
import './Navbar.scss';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
// import { RiCloseLine } from "react-icons/ri";


const Navbar = () => {
    return(
        <nav className="container navbar">
      <div className="logo">
        <BsFillRocketTakeoffFill size={35} />
        <p className="logo-text">
          Harry.<span>com</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li className="nav-btn">
            <a className="btn btn-orange" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </menu>
      <div className="menu-icons">
        <AiOutlineBars color='#fff' size={27} />
      </div>
    </nav>
    );
//   return (
//     <nav className='container logo'>
//       <div>
//         <BsFillRocketTakeoffFill size={35} />
//         <p className="logo-text">
//             Harry.<span>com</span>
//         </p>
//       </div>
//       <menu>
//         <ul className="nav-links">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Features</a></li>
//             <li><a href="#">Download</a></li>
//             <li><a href="#">Subscribe</a></li>
//             <li className='nav-btn'><a href="#" className='btn btn-orange'>Get Started</a></li>
//         </ul>
//       </menu>
//       <div className="menu-icons">
//         <AiOutlineBars color='#fff' size={27} />
//       </div>
//     </nav>
//   )
}

export default Navbar;
