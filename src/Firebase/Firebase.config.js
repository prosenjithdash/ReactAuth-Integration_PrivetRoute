// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgzK3xNk03iUlFHNyJlYHdidiPJ55-mtA",
  authDomain: "reactauth-integration-privetro.firebaseapp.com",
  projectId: "reactauth-integration-privetro",
  storageBucket: "reactauth-integration-privetro.appspot.com",
  messagingSenderId: "933540393533",
  appId: "1:933540393533:web:1097946bb9f1b561dbb054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
