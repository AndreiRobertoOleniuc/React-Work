import React from "react";
import "./style/item.css";

function Item(props) {
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col border-bottom border-dark item text-dark">
        <input type="checkbox" id="checkbox" />
        <label>{props.text}</label>
      </div>
      <div className="col"></div>
    </div>
  );
}
export default Item;
