import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAr-D2VRZW5JwwkAhXXTIOnolqNKHQG4GA",
    authDomain: "react-crud-9f4ad.firebaseapp.com",
    databaseURL: "https://react-crud-9f4ad.firebaseio.com",
    projectId: "react-crud-9f4ad",
    storageBucket: "react-crud-9f4ad.appspot.com",
    messagingSenderId: "1065597200620",
    appId: "1:1065597200620:web:338ab7de0f3f85e78bddc9"
  };
  var Firedb = firebase.initializeApp(firebaseConfig);

export default Firedb.database().ref();