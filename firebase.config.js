import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./config";

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
