// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAOmLdvYM6qxOy_qbXkWC16Tt4pxhEqmp4",
  authDomain: "fir-90eec.firebaseapp.com",
  projectId: "fir-90eec",
  storageBucket: "fir-90eec.appspot.com",
  messagingSenderId: "1029493146216",
  appId: "1:1029493146216:web:4d2251b98177247fcfb1dd",
  measurementId: "G-PCZBYC0KXG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
