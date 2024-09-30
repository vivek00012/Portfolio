// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmdSPFmNk4-LyqMpd80HRLrf3ZqjqgaDk",
  authDomain: "portfolio-c66c9.firebaseapp.com",
  projectId: "portfolio-c66c9",
  storageBucket: "portfolio-c66c9.appspot.com",
  messagingSenderId: "323793736544",
  appId: "1:323793736544:web:24d2f8abd3e09b7d83c405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);