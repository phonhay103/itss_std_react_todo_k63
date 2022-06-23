// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5GrSGh4xW1AypPkGHpY7Ym3_CFULaoaI",
  authDomain: "fir-sample-fa232.firebaseapp.com",
  projectId: "fir-sample-fa232",
  storageBucket: "fir-sample-fa232.appspot.com",
  messagingSenderId: "1061059612793",
  appId: "1:1061059612793:web:97e3678f205ef9535044a8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);