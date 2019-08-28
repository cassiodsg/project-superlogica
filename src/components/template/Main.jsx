import './Main.css'
import React from 'react'
// import Header from './Header'
import Nav from './Nav'

export default props =>
    <React.Fragment>
        <Nav {...props} />
        <main className="content">
            {props.children}
        </main>
    </React.Fragment>