import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    console.log(projects)
    return(
        <div className="align-items-center justify-content-center">
            { projects && projects.map(eachPr => {
                return(
                    <Link key={eachPr.id} to={'/project/'+ eachPr.id} >
                    <ProjectSummary project={eachPr}  />
                    </Link>
                )
            })}
        </div>
    )
}


export default ProjectList