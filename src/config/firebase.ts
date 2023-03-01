// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFC1bm_QEyVjuBNsu1VtLFbLlV2znG54s",
  authDomain: "react-auth-c9ef2.firebaseapp.com",
  projectId: "react-auth-c9ef2",
  storageBucket: "react-auth-c9ef2.appspot.com",
  messagingSenderId: "110715680874",
  appId: "1:110715680874:web:3a493e42b4c1bd42177213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);