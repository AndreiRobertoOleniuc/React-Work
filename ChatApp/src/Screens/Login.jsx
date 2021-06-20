import React from 'react'
import { useAuth } from "../Data/AuthProvider";
import db from "../Data/Firebase";
export default function Login() {
    const { login, currentUser } = useAuth();
    const logIntoApp = () => {
        login("andrei@gmail.com", "Spidy13andrei");
        console.log(currentUser.uid);
    }
    const fetchData = () => {
        db.collection("chats").get()
            .then((doc) => {
                console.log(doc.data())
            })
    }
    return (
        <div>
            <button onClick={logIntoApp}>Login</button>
            <button onClick={fetchData}>Get Data</button>
        </div>
    )
}

