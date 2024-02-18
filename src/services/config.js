
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
    authDomain: "tienda--greenfort.firebaseapp.com",
    projectId: "tienda--greenfort",
    storageBucket: "tienda--greenfort.appspot.com",
    messagingSenderId: "122945465787",
    appId: "1:122945465787:web:dea94450dd06fcb32f689e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);