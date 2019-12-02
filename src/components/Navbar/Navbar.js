import React from 'react';
import '../../App.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className='main-Grid-Navbar'>
            <div >
                <NavLink to="/home"> Home </NavLink>
            </div>
            <div >
                <NavLink to="/profile"> Profile </NavLink>
            </div>
            <div >
                <NavLink to="/settings"> Settings </NavLink>
            </div>
          <div >
              <NavLink to="/music"> Music</NavLink>
          </div>
          <div >
            <NavLink to="/reduxpage"> ReduxPage</NavLink>
          </div>
        </div>
    )
};


export default Navbar;