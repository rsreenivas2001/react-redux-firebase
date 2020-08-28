import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props
        const { auth } = this.props
         if( auth.uid ) 
          return <Redirect to="/" />
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 signin bg-second ">
                        <form onSubmit={this.handleSubmit} >
                            <div className="from-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
                            </div>
                            <div className="from-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"  onChange={this.handleChange}/>
                            </div>
                            <div className="from-group">
                                <button type="submit" id="formsubmit" className="btn btn-primary">LogIn</button>
                            </div>
                        </form>
                        {authError ? <p className="align-center">{authError}</p> : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (creds) => dispatch(signIn(creds))
    } 
}

const mapStateToProps = (state) => {
    return{
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
