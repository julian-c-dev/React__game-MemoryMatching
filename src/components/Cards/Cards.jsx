import React from "react";
import "./Cards.css";
import imageBlank from "../../assets/blank.png";

const Cards = (props) => {
  const sendId = (e) => {
    props.onCardClicked(e.target.id);
  };

  return (
    <div>
      <img
        id={props.character.id}
        onClick={(e) => {
          sendId(e);
        }}
        className="cards"
        src={imageBlank}
        alt=""
      />
    </div>
  );
};

export default Cards;
