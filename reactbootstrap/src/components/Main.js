import React from "react";
import TodoItem from "./TodoItem";
import "./style/item.css";

function Main() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-6 text-dark">
          <div id="boxForTodo">
            <h1>Todo</h1>
            <TodoItem text="Essen kochen" />
            <TodoItem text="React lernen" />
            <TodoItem text="Spiele spielen" />
            <TodoItem text="Lernen " />
            <br />
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default Main;
