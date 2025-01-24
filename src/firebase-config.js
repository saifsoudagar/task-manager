// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeNYz-tP5nKQThSyi6lo-wmpolZj6UBJo",
    authDomain: "note-13d25.firebaseapp.com",
    projectId: "note-13d25",
    storageBucket: "note-13d25.firebasestorage.app",
    messagingSenderId: "196967962139",
    appId: "1:196967962139:web:2a079b28e3c41396cecabe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };