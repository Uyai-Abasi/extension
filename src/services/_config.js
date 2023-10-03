// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBdyLhp7gdW0CJluZY_9tRxQYN-hleVQIU",
  authDomain: "helpmeout-9875c.firebaseapp.com",
  projectId: "helpmeout-9875c",
  storageBucket: "helpmeout-9875c.appspot.com",
  messagingSenderId: "5971771956",
  appId: "1:5971771956:web:1a972c97a3719b26c98061",
  measurementId: "G-CFPS4WDGNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };