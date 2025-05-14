// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW74CO3Hjj5GCMCRSTTWVq-UkDfoaq1s8",
  authDomain: "star-wars-data-watcher.firebaseapp.com",
  projectId: "star-wars-data-watcher",
  storageBucket: "star-wars-data-watcher.firebasestorage.app",
  messagingSenderId: "308393097998",
  appId: "1:308393097998:web:386eab5cfcb9911f8ab55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
