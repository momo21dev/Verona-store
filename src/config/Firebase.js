
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1B2KsakRl6SWvc5GUVJR6_94JYUphR-k",
  authDomain: "verona-8b1d0.firebaseapp.com",
  projectId: "verona-8b1d0",
  storageBucket: "verona-8b1d0.firebasestorage.app",
  messagingSenderId: "450872772370",
  appId: "1:450872772370:web:c99063cd91d8ed623a55cb",
  measurementId: "G-7KHB5HMLM8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)