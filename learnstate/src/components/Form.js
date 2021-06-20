import React from "react";

function Form({ count, setCount, inputText, setInputText, gender, setGender }) {
  function changeName(e) {
    setInputText(e.target.value);
    console.log(inputText);
  }
  function changeG(e) {
    setGender(e.target.value);
    console.log(gender);
  }
  function submitName(e) {
    e.preventDefault();
    setCount([
      ...count,
      {
        name: inputText,
        gen: gender,
        id: Math.floor(Math.random() * 10000) + 1,
      },
    ]);
    setGender("Male");
    setInputText("");
  }
  return (
    <div>
      <input value={inputText} onChange={changeName} type="text" />
      <select value={gender} onChange={changeG}>
        <option name="male"> Male</option>
        <option name="female">Female</option>
      </select>
      <input type="submit" value="Submit" onClick={submitName} />
    </div>
  );
}

export default Form;
