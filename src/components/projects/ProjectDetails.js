import React from 'react'
import { Card , CardBody ,CardHeader , CardFooter , CardText } from 'reactstrap'

const ProjectDetails = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 align-items-center justify-content-center details">
                    <Card>
                        <CardHeader><h3>Clean the Vessels-{props.match.params.id}</h3></CardHeader>
                        <CardBody>
                            <CardText>bhsd sgsdiagbda hyguiabdasvc  hgygbs ashjguiab ac auhfua </CardText>
                        </CardBody>
                        <CardFooter>
                            <small className="text-muted">Posted By Sreenivas</small><br></br>
                            <small className="text-muted">Aug 19th 10pm</small>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
