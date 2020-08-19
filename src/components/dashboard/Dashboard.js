import React , {Component} from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'


class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ProjectList />
                    </div>
                    <div className="col-5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard