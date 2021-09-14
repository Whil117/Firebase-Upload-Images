
import {initializeApp } from 'firebase/app';
// import firebase from "firebase/storage"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const firebaseConfig = {
    apiKey: "AIzaSyAiCrlikRli2h2wWNb92rkQlgT02P4uhYs",
    authDomain: "studentapp-f7470.firebaseapp.com",
    projectId: "studentapp-f7470",
    storageBucket: "studentapp-f7470.appspot.com",
    messagingSenderId: "333522752060",
    appId: "1:333522752060:web:f95db0b37e2f9da5fc2939",
    measurementId: "G-J1RW837YL4"
  };

  const app = initializeApp(firebaseConfig)
  // const storage = firebase.getStorage()

 export default app
  // const db = getFirestore(app);
// console.log(app)
// Get a list of cities from your database
// async function getCities(db:any) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// getCities(db)