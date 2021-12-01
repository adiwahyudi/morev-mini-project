// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSCArTpIzeA8XY5BdNY9XpVVyo410YFrk",
  authDomain: "morev-alterra.firebaseapp.com",
  projectId: "morev-alterra",
  storageBucket: "morev-alterra.appspot.com",
  messagingSenderId: "297652313017",
  appId: "1:297652313017:web:a315356c15c5dc92e33468",
  measurementId: "G-YPDZWHJVHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

