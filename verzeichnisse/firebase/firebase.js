import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQNn8-ZT1VDWtPyGMiyZOYzkK0ofEcu0s",
    authDomain: "testing-53102.firebaseapp.com",
    projectId: "testing-53102",
    storageBucket: "testing-53102.appspot.com",
    messagingSenderId: "858320320078",
    appId: "1:858320320078:web:56da212d890e1844cb751f"
};

const app = Firebase.initializeApp(firebaseConfig);

export default app;
