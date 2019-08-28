import './App.css'
import React from 'react'

// import Nav from '../components/template/Nav'
import Header from '../components/template/Header'
import Home from '../components/home/Home'

import Footer from '../components/template/Footer'

export default props =>
    <div className="app">
        <Header/>
        <Home/>
        <Footer/>
    </div>