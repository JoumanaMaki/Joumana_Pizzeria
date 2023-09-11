import React, {useState} from "react";
import Logo from "../assets/logoo.jpeg";
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder"
import { Button } from "@mui/material";
//rfce
function Navbar() {
   
    const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = ()=>{
    setOpenLinks(!openLinks)
  }
  
    return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src={Logo} />
      <div className="hiddenLinks">
      <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
      </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
    <Button onClick={toggleNavbar}>
        <ReorderIcon/>
    </Button>
      </div>
    </div>
  );
}

export default Navbar;
