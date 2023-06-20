// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCP09nHSJIB_gEOFlVr-KpNEKUwUOHUDs",
  authDomain: "a-special-affair.firebaseapp.com",
  projectId: "a-special-affair",
  storageBucket: "a-special-affair.appspot.com",
  messagingSenderId: "788472104620",
  appId: "1:788472104620:web:0a900406c6746985fec109",
  measurementId: "G-RQP77YGWMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
