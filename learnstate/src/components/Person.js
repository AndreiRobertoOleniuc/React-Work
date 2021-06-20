import React from "react";

function Person({ name, gen }) {
  return (
    <div>
      <li>
        <h1>{name}</h1>
        <h4>{gen}</h4>
      </li>
    </div>
  );
}

export default Person;
