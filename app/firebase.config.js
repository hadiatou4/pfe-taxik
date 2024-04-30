// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApXUZ07fL5Ob60Ue0uXNmRYSmbSxdpH4o",
  authDomain: "taxik-auth.firebaseapp.com",
  projectId: "taxik-auth",
  storageBucket: "taxik-auth.appspot.com",
  messagingSenderId: "351344600018",
  appId: "1:351344600018:web:3831675aa778fa9ec41e0b",
  measurementId: "G-18DWM347ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
