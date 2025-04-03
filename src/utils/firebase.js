// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU6HOum6aavznTZ3MKiQXyNdKLqqBrQPE",
  authDomain: "netflix-gpt-b0029.firebaseapp.com",
  projectId: "netflix-gpt-b0029",
  storageBucket: "netflix-gpt-b0029.firebasestorage.app",
  messagingSenderId: "870654825718",
  appId: "1:870654825718:web:d06c378ab59d2b7766c8d7",
  measurementId: "G-P3DY3RCCGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();