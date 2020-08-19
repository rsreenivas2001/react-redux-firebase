import React from 'react'
import {  NavLink } from 'react-router-dom'


const SignedOutLinks = () =>{
    return( 
        <ul className="nav">
            <li className="nav-item "><NavLink className="btn" to="/signup">Sign Up</NavLink></li>
            <li className="nav-item "><NavLink className="btn" to="/signin">Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks