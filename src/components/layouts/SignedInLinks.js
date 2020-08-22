import React from 'react'

import {  NavLink } from 'react-router-dom'


const SignedInLinks = () =>{
    return( 
        <ul className="nav">
            <li className="nav-item "><NavLink className="btn" to="/create">Create Project</NavLink></li>
            <li className="nav-item "><a className="btn" href="/" >Log Out</a></li>
            <li className="nav-item "><NavLink className="btn btn-warning btn-circle" to="/">ZZ</NavLink></li>
        </ul>
    )
}

export default SignedInLinks