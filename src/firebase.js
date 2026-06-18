import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2hnsrqVHSn69bvJSkKlKEcjxVvrxP4dk",
  authDomain: "medea-82bc9.firebaseapp.com",
  projectId: "medea-82bc9",
  storageBucket: "medea-82bc9.firebasestorage.app",
  messagingSenderId: "636597757086",
  appId: "1:636597757086:web:216e5759549840a880878f",
  measurementId: "G-9DCGDZ8VL7",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
