import React, { Component } from 'react'
import createProject from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { createStore } from 'redux'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-6 offset-3 signup bg-second ">
        <form onSubmit={this.handleSubmit} >
                <div className="from-group">
                    <label htmlFor="title">Enter Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.handleChange} />
                </div>
                <div className="from-group">
                    <label htmlFor="content">Enter Description</label>
                    <textarea rows="7" className="form-control" id="content" placeholder="Description"  onChange={this.handleChange}/>
                </div>
                <div className="from-group">
                    <button type="submit" id="formsubmit" className="btn btn-primary">Create</button>
                </div>
        </form>
        </div>
        </div>
          
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(CreateProject)