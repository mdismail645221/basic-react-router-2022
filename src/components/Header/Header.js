import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      let activeStyle = {
        //   textDecoration: "underline",
          backgroundColor: "red",
          color: "white"
  };

//   let activeClassName = "underline";
    return (
        <div  className='manu-item'>
            <NavLink
            to="/home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Messages
          </NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about">About</NavLink>                  
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/friends">Friends</NavLink>                  
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/post">Post</NavLink>                  
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/contact">Contact</NavLink>
        </div>
    );
};

export default Header;