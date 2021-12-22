// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "../scss/app.scss";
import "./demo.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDmPgbnwT-SwLdkvrkTjEEVLCRfsBm8U5s",
	authDomain: "patrickstart-ba54a.firebaseapp.com",
	projectId: "patrickstart-ba54a",
	storageBucket: "patrickstart-ba54a.appspot.com",
	messagingSenderId: "76401319164",
	appId: "1:76401319164:web:23fc5c47d402edd0b14b79",
	measurementId: "G-GJ97EKL5Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
