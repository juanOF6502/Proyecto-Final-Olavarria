import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "proyecto-react-8131e.firebaseapp.com",
  projectId: "proyecto-react-8131e",
  storageBucket: "proyecto-react-8131e.appspot.com",
  messagingSenderId: "313221497463",
  appId: "1:313221497463:web:98edcdfd25280657937c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)