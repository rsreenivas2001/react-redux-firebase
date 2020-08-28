import React from 'react'
import { Navbar,  NavbarBrand } from 'reactstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navigation = (props) =>{
    const { auth } = props
    const AuthStatus = auth.uid ? <SignedInLinks /> : <SignedOutLinks /> 
    return(
        
        <Navbar dark>
            <div className="container">
            <NavbarBrand className="mr-auto" href="/">Organiser</NavbarBrand>
            { AuthStatus } 
            </div>
        </Navbar>
        
        
        
    )
}
const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(Navigation)