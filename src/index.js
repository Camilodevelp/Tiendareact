import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyDMyYNCzF3mf0_zINPK7znfZxBQasY_TzI",
  authDomain: "sairastore-c40a0.firebaseapp.com",
  projectId: "sairastore-c40a0",
  storageBucket: "sairastore-c40a0.appspot.com",
  messagingSenderId: "139802057746",
  appId: "1:139802057746:web:d1125133794ed564ec0ccb"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
