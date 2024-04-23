// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1MjWsY1ga0prwecbJ1NYYxSurY8GDyC0",
  authDomain: "ecommercev2-38491.firebaseapp.com",
  projectId: "ecommercev2-38491",
  storageBucket: "ecommercev2-38491.appspot.com",
  messagingSenderId: "608695074024",
  appId: "1:608695074024:web:e20489f492a85336b19d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
