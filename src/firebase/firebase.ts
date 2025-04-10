// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGHpsgy7QV8mU-_uVmMih_-r0Dp0g_zmk",
  authDomain: "fir-practice-30fb4.firebaseapp.com",
  projectId: "fir-practice-30fb4",
  storageBucket: "fir-practice-30fb4.firebasestorage.app",
  messagingSenderId: "1038069750125",
  appId: "1:1038069750125:web:11ac58c78fc163f4abe264",
  measurementId: "G-P7CCR77LVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };