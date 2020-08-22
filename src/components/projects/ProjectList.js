import React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    return(
        <div className="align-items-center justify-content-center">
            { projects && projects.map(eachPr => {
                return(
                    <ProjectSummary project={eachPr} key={eachPr.id} />
                )
            })}
        </div>
    )
}

export default ProjectList