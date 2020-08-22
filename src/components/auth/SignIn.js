import React, { Component } from 'react'

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
        console.log(this.state);
    }

    render() {
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
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
