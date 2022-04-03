import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div>
      <img src={props.character.image} alt="" />
    </div>
  );
};

export default Cards;
