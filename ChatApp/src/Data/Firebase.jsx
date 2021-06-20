import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBeL8-ddf5pJyr0plxGvK7Bu5ATNSNatFs",
    authDomain: "chatapp-a9a24.firebaseapp.com",
    projectId: "chatapp-a9a24",
    storageBucket: "chatapp-a9a24.appspot.com",
    messagingSenderId: "990484303600",
    appId: "1:990484303600:web:afc271c80b283d17307c35"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuth };
export default db;