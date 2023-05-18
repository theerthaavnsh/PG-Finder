// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGRw4I64H1-Vu0KPZx-orER522_Jcwu1E",
  authDomain: "pg-finder-8e741.firebaseapp.com",
  projectId: "pg-finder-8e741",
  storageBucket: "pg-finder-8e741.appspot.com",
  messagingSenderId: "195875997350",
  appId: "1:195875997350:web:ec21764bfb565bd959d667",
  measurementId: "G-P6LJ1W9232"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
