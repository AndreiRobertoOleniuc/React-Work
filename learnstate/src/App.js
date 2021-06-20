import React, { useState } from "react";
import Form from "./components/Form";
import NamesList from "./components/NamesList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [gender, setGender] = useState("Male");
  const [count, setCount] = useState([]);
  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        count={count}
        setCount={setCount}
        gender={gender}
        setGender={setGender}
      />
      <NamesList count={count} />
    </div>
  );
}

export default App;
