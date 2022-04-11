import React from "react";
import "./Card.css";
import imageBlank from "../../assets/blank.png";

const Card = (props) => {
  const cardClicked = (e) => {
    props.onCardClicked(e.target.id);
  };

  return (
    <>
      <img
        id={props.character.id}
        image-id={3}
        onClick={cardClicked}
        className="card"
        src={imageBlank}
        alt=""
      />
    </>
  );
};

export default Card;
