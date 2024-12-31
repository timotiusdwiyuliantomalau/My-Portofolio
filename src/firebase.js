import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgNgrGDpFMzFAGZR0KVt8ZE3af1-YG49w",
  authDomain: "portofolio-project-efd37.firebaseapp.com",
  projectId: "portofolio-project-efd37",
  storageBucket: "portofolio-project-efd37.firebasestorage.app",
  messagingSenderId: "214256044143",
  appId: "1:214256044143:web:06cb989db9047d1b79e59a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };