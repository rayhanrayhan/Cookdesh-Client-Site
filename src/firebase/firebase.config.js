// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlvj_Q5SfFOTuWDiJtTbA7vE4J-EGYMC0",
  authDomain: "the-cook-desh-cooking-site.firebaseapp.com",
  projectId: "the-cook-desh-cooking-site",
  storageBucket: "the-cook-desh-cooking-site.appspot.com",
  messagingSenderId: "455505679562",
  appId: "1:455505679562:web:13a4fd619d1457e8a85033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;