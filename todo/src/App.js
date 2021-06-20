import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //Unsere States

  //Der Input Text als State
  const [inputText, setInputText] = useState("");
  //Unsere Todos welche als Arrays gespeichert werden
  const [todos, setTodos] = useState([]);
  //Unser Status welcher ausgewählt wurde vom Benutzter als State
  const [status, setStatus] = useState("all");
  //Unsere Gefilterten Todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Wird ausgeführt wenn das Dokument geladen ist
  useEffect(() => {
    getLocalTodos();
  }, []);
  
  //Wird ausgeführt wenn sich die State Todos ändert oder Status
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Sieht sich die denn Status an und speichert die Daten der Todos gefiltert ind filteredTodos
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Speichert die Todos in LocalStorage
  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //Holt sich die Todos aus dem LocalStorage
  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }
  /*Die Form und die Todoliste*/
  /*Unsere Todo Liste Felder*/
  /*Unsere Todo Liste Felder*/
  return (
    <div className="App">
      <header>
        <h1>Andrei's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
