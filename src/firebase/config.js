// src/firebase.js
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBaNnkiDSMUv26EYndOOIWpbRPts3KKh68",
  authDomain: "alchemist-a02a0.firebaseapp.com",
  projectId: "alchemist-a02a0",
  storageBucket: "alchemist-a02a0.appspot.com",  // fixed storageBucket URL
  messagingSenderId: "33492440163",
  appId: "1:33492440163:web:fdae3424e21ef7c1c01456",
  measurementId: "G-YXBXNC3973"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Google Auth provider
export const googleProvider = new GoogleAuthProvider();

// Sign in / Sign up with Google (popup)
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Sign in with email and password
export const signInWithPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign up with email and password
export const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export default app;
