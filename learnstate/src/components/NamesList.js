import React from "react";
import Person from "./Person";

function NamesList({ count }) {
  return (
    <div>
      <ul>
        {count.map((person) => (
          <Person key={person.id} name={person.name} gen={person.gen} />
        ))}
      </ul>
    </div>
  );
}

export default NamesList;
