import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">boop</h2>
      </div>
      <div className="bottom">
        <Detail />
      </div>
    </div>
  );
}

export default Card;
