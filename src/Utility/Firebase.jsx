import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVelWeX4t2UsyeXO7JVwBoa1JsJRrBhuE",
  authDomain: "clone-ed39b.firebaseapp.com",
  projectId: "clone-ed39b",
  storageBucket: "clone-ed39b.appspot.com",
  messagingSenderId: "232880986101",
  appId: "1:232880986101:web:766656e198fdf27459f2bc",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
