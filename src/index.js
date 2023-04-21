import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDH9gK3VX5jmrzLAEKUJ2xTG1zjHUQ4-M",
  authDomain: "chensoncomics.firebaseapp.com",
  projectId: "chensoncomics",
  storageBucket: "chensoncomics.appspot.com",
  messagingSenderId: "459427886613",
  appId: "1:459427886613:web:e61b9d87676b2b916fc01c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

