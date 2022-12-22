import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.scss"
import { NavList } from './navlist/NavList';
import Logo from '../../assets/images/Logo.png'
export const Menu = () => {
  return (
    <div className='menu'>
      <Link className='logo' to="/">
        <img  src={Logo} width="56" height="56" alt="Logo" />
      </Link>
      <NavList/>
    </div> 
  );
};

