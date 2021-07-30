import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqp0bHAvcMGO7nLWMDXDJGP7ayiYl7vfk",
    authDomain: "long-centaur-313005.firebaseapp.com",
    projectId: "long-centaur-313005",
    storageBucket: "long-centaur-313005.appspot.com",
    messagingSenderId: "530590843901",
    appId: "1:530590843901:web:8c72c2d5d8d258f43d0f94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore()
export {db, auth, provider}