import React from "react";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'
//rfce
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide"></div>
      <img src={Logo} />
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
