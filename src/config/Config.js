import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDClIyZ74bcpm7-9H5BcsjQXOQFDIv_wtA",
  authDomain: "linkedin-clone00.firebaseapp.com",
  projectId: "linkedin-clone00",
  storageBucket: "linkedin-clone00.appspot.com",
  messagingSenderId: "157333948044",
  appId: "1:157333948044:web:624535cf3712856cbddda9",
  measurementId: "G-TTV2XCRWQ3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
