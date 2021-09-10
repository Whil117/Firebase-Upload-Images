
import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'
import dotenv from "dotenv";
dotenv.config();


const firebaseConfig = {
    apiKey: `${process.env.apiKey}`,
    authDomain: "studentapp-f7470.firebaseapp.com",
    projectId: "studentapp-f7470",
    storageBucket: "studentapp-f7470.appspot.com",
    messagingSenderId: "333522752060",
    appId: "1:333522752060:web:f95db0b37e2f9da5fc2939",
    measurementId: "G-J1RW837YL4"
  };
  
  firebase.initializeApp(firebaseConfig)

  const fbStorage = firebase.storage()
  const fbFirestore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { fbStorage, fbFirestore, timeStamp }