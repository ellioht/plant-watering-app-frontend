import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggle");

    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu active') : setActive('nav_menu')


        // Toggle Icon

        toggleIcon === 'nav_toggle' ? setToggleIcon('nav_toggle toggle') : setToggleIcon('nav_toggle')
    }




  return (
    <nav className="nav">
      <a href="/" className="nav_brand">
        herdoy
      </a>
      <ul className={active}></ul>
      <li className="nav_item">
        <a href="#" className="nav_link">Home</a>
      </li>
      <li className="nav_item">
        <a href="#" className="nav_link">About</a>
      </li>
      <li className="nav_item">
        <a href="#" className="nav_link">Skills</a>
      </li>
      <li className="nav_item">
        <a href="#" className="nav_link">Portfolio</a>
      </li>
      <li className="nav_item">
        <a href="#" className="nav_link">Contacts</a>
      </li>
      <ul>
        <div onClick = {navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
