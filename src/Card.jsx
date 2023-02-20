import React from "react";
import Music from "./Music";
import Information from "./Detail";
import Image from "./Image";

function Card() {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">Hans Zimmer</h2>
        <Image />
      </div>
     <Music />
     <Information />
    </div>
  );
}

export default Card;
