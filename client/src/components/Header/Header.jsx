import React, { Component } from 'react';
import { NavbarItems } from "./NavbarItems"
import logo from '../../img/logo.png';
import './Header.css';
// Joana's code starts here

class Header extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Sike Hike<i className={logo}></i></h1>
        {/* <div className="menu-icon"></div> */}
        <ul>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>
                {item.title}
              </a></li>
            )
          })}
        </ul>
      </nav>
    )
  }
}



export default Header;
