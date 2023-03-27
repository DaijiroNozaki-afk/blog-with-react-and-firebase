import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBChz4lQdj1VYvI360VjsD7HPMHVCw_e28",
  authDomain: "blog-a96de.firebaseapp.com",
  projectId: "blog-a96de",
  storageBucket: "blog-a96de.appspot.com",
  messagingSenderId: "730756456470",
  appId: "1:730756456470:web:3a4ea5b7d45c2bd3e89537"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }