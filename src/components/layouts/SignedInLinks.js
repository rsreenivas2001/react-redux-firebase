import React from 'react'
import {  NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'



const SignedInLinks = (props) =>{
    return( 
        <ul className="nav">
            <li className="nav-item "><NavLink className="btn btn-white" to="/create">Create Project</NavLink></li>
            <li className="nav-item "><a className="btn btn-white" onClick={props.signOut} >Log Out</a></li>
            <li className="nav-item "><NavLink className="btn btn-white btn-warning btn-circle" to="/">ZZ</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInLinks)