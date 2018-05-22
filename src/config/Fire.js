// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
//import 'firebase/datastore';
// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyCV2ukDmKiFQQaTHpl0VHZRsS6ZzdDexsE",
    authDomain: "todo-a5651.firebaseapp.com",
    databaseURL: "https://todo-a5651.firebaseio.com",
    projectId: "todo-a5651",
    storageBucket: "todo-a5651.appspot.com",
    messagingSenderId: "283747084670"
};
const fire = firebase.initializeApp(config)
export default fire;