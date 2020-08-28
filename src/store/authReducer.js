const initstate = { 
    authError : null
}


const authReducer = (state = initstate, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log(action.err)
            return{
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout suceess')
            return state
        default:
            return state
    }
}

export default authReducer