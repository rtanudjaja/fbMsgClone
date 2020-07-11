import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDar2SSmCnQRQeYrD-Cp1sGDeYAbEeYD4g",
  authDomain: "fb-r-messenger.firebaseapp.com",
  databaseURL: "https://fb-r-messenger.firebaseio.com",
  projectId: "fb-r-messenger",
  storageBucket: "fb-r-messenger.appspot.com",
  messagingSenderId: "314792489711",
  appId: "1:314792489711:web:de562fcccb4db1ad4ea11a"
});

const db = firebase.firestore();

export default db;