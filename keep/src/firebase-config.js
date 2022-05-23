import { initializeApp } from "firebase/app";
import {getFirestore} from'@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD8TX2g-ZvahMzCWSdIQ0vQGejyW1qSRME",
    authDomain: "keep-ee9c4.firebaseapp.com",
    projectId: "keep-ee9c4",
    storageBucket: "keep-ee9c4.appspot.com",
    messagingSenderId: "711438687930",
    appId: "1:711438687930:web:285fd03a0f446617222c83",
    measurementId: "G-83Y7F10W4K"
  };
  
  const app =initializeApp(firebaseConfig)
export const db=getFirestore(app)