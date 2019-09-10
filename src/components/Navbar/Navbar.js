import React from 'react';
import s from './Navbar.module.css';
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={s.mainNavbar}>
            <div className={s.navLinks}>
                <NavLink to="/home"> Home </NavLink>
            </div>
            <div className={s.navLinks}>
                <NavLink to="/profile"> Profile </NavLink>
            </div>
            <div className={s.navLinks}>
                <NavLink to="/settings"> Settings </NavLink>
            </div>
          <div className={s.navLinks}>
              <NavLink to="/music"> Music</NavLink>
          </div>
          <div className={s.navLinks}>
            <NavLink to="/reduxpage"> ReduxPage</NavLink>
          </div>
        </div>
    )
};


export default Navbar;