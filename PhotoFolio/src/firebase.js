// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXvbxTQ7bofoF3my3Nf3GOPCQJTb-coa0",
  authDomain: "photofolio-a7802.firebaseapp.com",
  projectId: "photofolio-a7802",
  storageBucket: "photofolio-a7802.appspot.com",
  messagingSenderId: "994545907521",
  appId: "1:994545907521:web:87d13d51a7af157c8a93c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
