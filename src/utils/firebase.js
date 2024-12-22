import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BXAJoXW51nS8UGBgZQg2k29DN1699zY",
  authDomain: "healthcenter-app.firebaseapp.com",
  projectId: "healthcenter-app",
  storageBucket: "healthcenter-app.firebasestorage.app",
  messagingSenderId: "495865160667",
  appId: "1:495865160667:web:a4591abea7d962fee23dfe",
  measurementId: "G-WJCMCZ6551",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
