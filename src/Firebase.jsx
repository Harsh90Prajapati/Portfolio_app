/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDp1THUkElCBxglrh5tW8gRaNXq-ao_of4",
    authDomain: "portfolio-app-5dba3.firebaseapp.com",
    projectId: "portfolio-app-5dba3",
    storageBucket: "portfolio-app-5dba3.appspot.com",
    messagingSenderId: "942088154171",
    appId: "1:942088154171:web:91e116d62135b36f59401e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
    
  export default db;