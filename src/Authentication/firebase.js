// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
//Henry: it's better to use .env.local file to hide API keys on github
const firebaseConfig = {
  apiKey: "AIzaSyDVSGimbUdPsz7DN312WkGJ9dnc1h_bDVI",
  authDomain: "sorting-algorithm-playground.firebaseapp.com",
  projectId: "sorting-algorithm-playground",
  storageBucket: "sorting-algorithm-playground.appspot.com",
  messagingSenderId: "184366387061",
  appId: "1:184366387061:web:d291751a57fdfb2f878d3c",
  measurementId: "G-6L5T7HSMCS"
};

// Initialize a Firebase object
const app = initializeApp(firebaseConfig);

//Third party auth providers
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const auth = getAuth(app);

//use db to access the Firebase object
const db = getFirestore(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      console.log(result);
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);
      //nav to home page
      window.location = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithGithub = () => {
  signInWithPopup(auth, GithubProvider)
    .then((result) => {
      console.log(result);
      // The signed-in user info.
      const user = result.user;
      //save the info in local storage
      localStorage.setItem("user", user);
      localStorage.setItem("userEmail", user.email);
      //nav to home page
      window.location = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};

const logOut = () => {
  signOut(auth)
    .then(() => {
      let previousSelect = localStorage.getItem("selectedAlgorithm");
      // Sign-out successful.
      localStorage.clear();
      localStorage.setItem("selectedAlgorithm", previousSelect);
      console.log("called logOut from firebase.js");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};



export {
  app,
  db,
  auth,
  firebaseConfig,
  signInWithGoogle,
  signInWithGithub,
  logOut,
};
