// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKl5mIjw68a-PihCEK-MS0UzMT6OunIIA",
    authDomain: "auth-1ad87.firebaseapp.com",
    projectId: "auth-1ad87",
    storageBucket: "auth-1ad87.firebasestorage.app",
    messagingSenderId: "867747442127",
    appId: "1:867747442127:web:effb14b39380c7076b36ba"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
