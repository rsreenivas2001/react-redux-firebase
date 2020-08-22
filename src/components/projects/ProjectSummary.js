import React from 'react'
import { Card , CardBody ,CardTitle , CardText } from 'reactstrap'

const ProjectSummary = ({project}) => {
    return(
        <div className="align-items-center justify-content-center">
            <Card className="summary bg-card">
                <CardBody>
                    <CardTitle><h3>{project.title}</h3></CardTitle>
                    <CardText>Posted by Sreenivas</CardText>
                    <CardText><small className="text-muted">Aug 2nd 7.00 pm</small></CardText>           
                </CardBody>      
            </Card>
        </div>
    )
}

export default ProjectSummary