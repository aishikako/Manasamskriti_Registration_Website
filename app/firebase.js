// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArRQKh292s5RaTJkX5mOxG7RiKwGxtBqE",
  authDomain: "registration-page-285da.firebaseapp.com",
  projectId: "registration-page-285da",
  storageBucket: "registration-page-285da.appspot.com",
  messagingSenderId: "405436280945",
  appId: "1:405436280945:web:be8d2858cb951332c1abd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  