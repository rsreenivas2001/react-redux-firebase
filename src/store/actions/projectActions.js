const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Gnana',
            authorLastname: 'Gokul',
            authorId: 1123,
            time: new Date()
        }).then(() => {
            dispatch({ type:'CREATE_PROJECT' , project })
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' , err })
        })
        
        
    }
}

export default createProject