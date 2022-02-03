import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBqrSnLitkvWt7RKKck1DZLqYKGnCzJv8",
  authDomain: "bing-bang123456.firebaseapp.com",
  databaseURL: "https://bing-bang123456-default-rtdb.firebaseio.com",
  projectId: "bing-bang123456",
  storageBucket: "bing-bang123456.appspot.com",
  messagingSenderId: "556634595027",
  appId: "1:556634595027:web:49552ff1555d3b18057e26",
  measurementId: "G-QY5S63B0TX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
