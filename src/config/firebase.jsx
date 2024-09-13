import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh_g9svOC3PYUJpcwhClrfn18HytqAc4E",
  authDomain: "nested-list-61e11.firebaseapp.com",
  projectId: "nested-list-61e11",
  storageBucket: "nested-list-61e11.appspot.com",
  messagingSenderId: "435036591433",
  appId: "1:435036591433:web:1f7f5a56eb311f33b2b698",
  measurementId: "G-3DP93FC5S9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, githubProvider };
