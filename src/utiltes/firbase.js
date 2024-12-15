import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged
}   from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB2t5iNc9tQsuqs5hOE65UZrcWf7FfMMD0",
  authDomain: "auth-smit-project.firebaseapp.com",
  projectId: "auth-smit-project",
  storageBucket: "auth-smit-project.firebasestorage.app",
  messagingSenderId: "448937730799",
  appId: "1:448937730799:web:0aaa3eb4eda1cb3db6f11a",
  measurementId: "G-5Z0RF91FHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {
    
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    app,
    auth,
}