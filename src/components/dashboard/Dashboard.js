import React , {Component} from 'react'
import { compose } from 'redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component{
    render(){
        const { auth } = this.props
        if( !auth.uid ) 
            return <Redirect to="/signin" />
        else
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <ProjectList projects={this.props.projects}/>
                        </div>
                        <div className="col-5 offset-1">
                            <Notifications />
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
)(Dashboard)