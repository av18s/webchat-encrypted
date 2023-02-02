import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyA9oOhuRfrNmRAtLAr5eeiljCECot89_FE",
    authDomain: "chat-3-4acb2.firebaseapp.com",
    projectId: "chat-3-4acb2",
    storageBucket: "chat-3-4acb2.appspot.com",
    messagingSenderId: "489657600948",
    appId: "1:489657600948:web:eb430cd481eef4ade100e1"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
