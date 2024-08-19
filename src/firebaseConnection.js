import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseconfig ={
    apiKey: "AIzaSyCDzt2sL_8liPaonQVUugMEh5ADrfDbAEI",
    authDomain: "projettu-dde60.firebaseapp.com",
    projectId: "projettu-dde60",
    storageBucket: "projettu-dde60.appspot.com",
    messagingSenderId: "1069081929600",
    appId: "1:1069081929600:web:ca1730151c5dd0269e8365"
}

const firebaseapp = initializeApp(firebaseconfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};