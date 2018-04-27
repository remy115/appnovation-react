import React from 'react';
import '../components-css/header.css';
import {Link} from 'react-router-dom';
const Header=()=>{
  return (
    <header className="header">
      <Link to="/" ><img src="https://www.appnovation.com/themes/appnovation/images/mainlogo.svg" className="header-logo" alt="logo" /></Link>
      <h1 className="header-title">Welcome to Appnovation React Test</h1>
    </header>
  )
}

export default Header;