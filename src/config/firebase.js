import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYj7bPN7jZL1oHRNF_AwR9noVZqZOPX24",
  authDomain: "gdsc-website-b0159.firebaseapp.com",
  projectId: "gdsc-website-b0159",
  storageBucket: "gdsc-website-b0159.appspot.com",
  messagingSenderId: "65390509505",
  appId: "1:65390509505:web:3c18271f1cbcf55ba40340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
