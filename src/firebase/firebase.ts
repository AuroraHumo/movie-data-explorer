import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_TMDB_API_KEY,
  authDomain: "star-wars-data-watcher.firebaseapp.com",
  projectId: "star-wars-data-watcher",
  storageBucket: "star-wars-data-watcher.firebasestorage.app",
  messagingSenderId: "308393097998",
  appId: "1:308393097998:web:386eab5cfcb9911f8ab55f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


