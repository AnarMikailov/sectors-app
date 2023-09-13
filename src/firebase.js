import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBdkAmnUXLpg519HlhX1u5W7bwlI1XOoQE",
  authDomain: "spa-choosing-sectors.firebaseapp.com",
  databaseURL: "https://spa-choosing-sectors-default-rtdb.firebaseio.com",
  projectId: "spa-choosing-sectors",
  storageBucket: "spa-choosing-sectors.appspot.com",
  messagingSenderId: "761903541484",
  appId: "1:761903541484:web:f6ac08fd814b8a60bbc9c9",
  measurementId: "G-XEPSJEY99K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
