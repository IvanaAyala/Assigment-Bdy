import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
 
  const firebaseConfig = {
    apiKey: "AIzaSyBJFhgQBwHVnpngtOv2Fz3JB108zO50sp8",
    authDomain: "assigment-39d0a.firebaseapp.com",
    projectId: "assigment-39d0a",
    storageBucket: "assigment-39d0a.appspot.com",
    messagingSenderId: "410634886468",
    appId: "1:410634886468:web:fd47626e437d0f34d2cb11"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  export {auth, createUserWithEmailAndPassword}