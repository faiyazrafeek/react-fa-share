import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAtfhkTQcYC7XWP9XekxH3H9fiq-PCX3og",
    authDomain: "fa-share.firebaseapp.com",
    projectId: "fa-share",
    storageBucket: "fa-share.appspot.com",
    messagingSenderId: "1089670323297",
    appId: "1:1089670323297:web:34fe65017d035348a61e20",
    measurementId: "G-SEK4F2XTB0"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();