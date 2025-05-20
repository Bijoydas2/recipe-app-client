// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZNBrgwRi-FmcMh0orIoP48MU2SwRZRVA",
  authDomain: "recipe-book-app-auth.firebaseapp.com",
  projectId: "recipe-book-app-auth",
  storageBucket: "recipe-book-app-auth.firebasestorage.app",
  messagingSenderId: "997731635523",
  appId: "1:997731635523:web:545a7f1a853071e7595ff6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);