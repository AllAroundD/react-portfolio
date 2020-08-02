import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.bgcolor ? props.bgcolor : "none"
      }}
    >
    </div>
  );
}

export default Card;
