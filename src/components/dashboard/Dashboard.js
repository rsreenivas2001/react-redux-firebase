import React , {Component} from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        
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
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)