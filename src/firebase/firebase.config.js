// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHNBPRial79byw4YtXG-zWQSr6fXK7x9Y",
  authDomain: "ema-john-firebase-auth-e7f40.firebaseapp.com",
  projectId: "ema-john-firebase-auth-e7f40",
  storageBucket: "ema-john-firebase-auth-e7f40.appspot.com",
  messagingSenderId: "937875655166",
  appId: "1:937875655166:web:420669ea5cebd2624f58af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;