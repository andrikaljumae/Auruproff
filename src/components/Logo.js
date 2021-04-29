import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../styles/logo.css';

function Logo() {
    return (
        <div className="Header-left">
        <Link to={'/'}>
          <img src={logo} width="150px" height="30px" alt="pilt" />
        </Link>
    </div>
    )
}

export default Logo
