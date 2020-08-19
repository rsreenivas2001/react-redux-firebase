import React from 'react'
import { Navbar,  NavbarBrand } from 'reactstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navigation = () =>{
    return(
        
        <Navbar dark>
            <div className="container">
            <NavbarBrand className="mr-auto" href="/">Organiser</NavbarBrand>
            
            <SignedInLinks /> 
            <SignedOutLinks />
            
            </div>
        </Navbar>
        
        
        
    )
}

export default Navigation