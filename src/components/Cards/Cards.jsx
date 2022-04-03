import React from "react";
import "./Cards.css";
import imageBlank from "../../assets/blank.png";

const Cards = (props) => {
  const flipCard = (e) => {
    e.preventDefault();
    e.currentTarget.src = props.character.image;
  };

  return (
    <div>
      <img
        id={props.character}
        onClick={(e) => flipCard(e)}
        className="cards"
        src={imageBlank}
        alt=""
      />
    </div>
  );
};

export default Cards;
