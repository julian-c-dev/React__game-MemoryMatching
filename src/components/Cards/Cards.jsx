import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div>
      <img className="cards" src={props.character.image} alt="" />
    </div>
  );
};

export default Cards;
