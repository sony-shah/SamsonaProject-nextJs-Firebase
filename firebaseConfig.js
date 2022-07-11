import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const google = require('googleapis'); 
// import 'firebase/firestore';
import 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB83zMFjEayIX8IZK5oc9QiOBrThFuXY7Y",
  authDomain: "samsona-c8716.firebaseapp.com",
  projectId: "samsona-c8716",
  storageBucket: "samsona-c8716.appspot.com",
  messagingSenderId: "824883639558",
  appId: "1:824883639558:web:67ce57a5e01cf059d59a87"
    
});

const db = getFirestore();
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// export const increment = firebase.firestore.FieldValue.increment;


