import './Header.css'
import React from 'react'
import logo from '../../assets/images/logo.svg';

export default props =>
    <header className="header">
        <div><a href="/"><img src={logo} alt="" /></a></div>
    </header>