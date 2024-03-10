// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f0364.firebaseapp.com",
  projectId: "real-estate-f0364",
  storageBucket: "real-estate-f0364.appspot.com",
  messagingSenderId: "1044545208411",
  appId: "1:1044545208411:web:98824da0794b464037bf7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);