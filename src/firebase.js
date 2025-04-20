// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmO_j05OYWi4DjuW7fLb3uLglaWpSbslo",
  authDomain: "taskmanager-b63f7.firebaseapp.com",
  projectId: "taskmanager-b63f7",
  storageBucket: "taskmanager-b63f7.firebasestorage.app",
  messagingSenderId: "476068432756",
  appId: "1:476068432756:web:e754b262b8b0d5bf927a21",
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_API_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;