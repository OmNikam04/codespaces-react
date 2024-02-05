// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzVlAqIjs8fVTnRROfzHdsAeNtWvsxQ30",
  authDomain: "cclpractical8.firebaseapp.com",
  projectId: "cclpractical8",
  storageBucket: "cclpractical8.appspot.com",
  messagingSenderId: "93457698964",
  appId: "1:93457698964:web:679a7e5ce256b444bd6481",
  measurementId: "G-RB503G818B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app
