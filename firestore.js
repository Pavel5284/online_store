// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuNCoEPw_9RdlRmVGNomXl7gvBXJw2wuY",
    authDomain: "online-store-d4db9.firebaseapp.com",
    projectId: "online-store-d4db9",
    storageBucket: "online-store-d4db9.appspot.com",
    messagingSenderId: "363855259681",
    appId: "1:363855259681:web:46066b27f89f77eeb09b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });