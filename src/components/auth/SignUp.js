import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
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
                
                    <div className="col-6 offset-3 signup bg-second ">
                        <form onSubmit={this.handleSubmit} >
                            <div className="from-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" id="firstname" placeholder="Firstname" onChange={this.handleChange} />
                            </div>
                            <div className="from-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Lastname"  onChange={this.handleChange}/>
                            </div>
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

export default SignUp
