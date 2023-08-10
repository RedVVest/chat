// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM2PzbtV_v00B99gSUh40Me0m_kRdvO9k",
    authDomain: "chat-9d966.firebaseapp.com",
    projectId: "chat-9d966",
    storageBucket: "chat-9d966.appspot.com",
    messagingSenderId: "739372611284",
    appId: "1:739372611284:web:3e1eb79a85b525bf38ed41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()