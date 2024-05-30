import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDlbv9HuxBNzJdcaEFyKLHwC1lTjFAFxtU",
    authDomain: "pump-labs.firebaseapp.com",
    projectId: "pump-labs",
    storageBucket: "pump-labs.appspot.com",
    messagingSenderId: "42574106315",
    appId: "1:42574106315:web:04074c36ed83d4dd15154e",
    measurementId: "G-MZD5MM37X6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };