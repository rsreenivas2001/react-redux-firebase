import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'



var firebaseConfig = {
    apiKey: "AIzaSyCyb8xNMxYpZ8DxUeGocR2UrccATe6rk7k",
    authDomain: "organiser-784fb.firebaseapp.com",
    databaseURL: "https://organiser-784fb.firebaseio.com",
    projectId: "organiser-784fb",
    storageBucket: "organiser-784fb.appspot.com",
    messagingSenderId: "861739375559",
    appId: "1:861739375559:web:8a7a34b22d7c1ca898d7e2",
    measurementId: "G-FRTLJZVRT8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore();

export default firebase