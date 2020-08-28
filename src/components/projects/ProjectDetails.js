import React from 'react'
import { Card , CardBody ,CardHeader , CardFooter , CardText } from 'reactstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    console.log(props);
    const { curproject } = props;
    const { auth } = props
    if( !auth.uid ) 
          return <Redirect to="/signin" />
    if( curproject ){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2 align-items-center justify-content-center details">
                        <Card>
                            <CardHeader><h3>{curproject.title}</h3></CardHeader>
                            <CardBody>
                                <CardText>{curproject.content}</CardText>
                            </CardBody>
                            <CardFooter> 
                                <small className="text-muted">Posted By {curproject.authorFirstname} {curproject.authorLastname}</small><br></br>
                                <small className="text-muted">Aug 19th 10pm</small>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="container">
                <h3 className="align-center">Project Loading..!</h3>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        curproject: state.firestore.data.project ? state.firestore.data.project : null,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        { collection : 'projects',
          doc : props.match.params.id,
          storeAs : 'project'  
        }
    ])
)(ProjectDetails)

