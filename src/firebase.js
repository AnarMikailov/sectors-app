// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBdkAmnUXLpg519HlhX1u5W7bwlI1XOoQE",
//   authDomain: "spa-choosing-sectors.firebaseapp.com",
//   projectId: "spa-choosing-sectors",
//   storageBucket: "spa-choosing-sectors.appspot.com",
//   messagingSenderId: "761903541484",
//   appId: "1:761903541484:web:f6ac08fd814b8a60bbc9c9",
//   measurementId: "G-XEPSJEY99K",
// };

// // Initialize Firebase
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Read the JSON file (assuming it's named "data.json" and located in the public folder)
// import jsonData from "./utils/addFireBase";
// console.log(jsonData);
// // Create a reference to the Firestore collection where you want to store the JSON data
// const sectorsCollectionRef = collection(db, "sectors");

// // Convert the JSON data to a JavaScript object (if it's not already)
// const dataObject = JSON.parse(jsonData);

// // Add the JavaScript object to the Firestore collection
// addDoc(sectorsCollectionRef, dataObject)
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   });
