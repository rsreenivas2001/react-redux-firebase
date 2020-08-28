import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware , compose} from 'redux'
import rootReducer from './store/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirebase , ReactReduxFirebaseProvider , reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore , reduxFirestore , createFirestoreInstance  } from 'redux-firestore'
import firebaseConfig from './configs/firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const store = createStore(
  rootReducer , compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(firebase , firebaseConfig)
    
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
    <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
