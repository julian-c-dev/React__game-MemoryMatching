import React from "react";
import Card from "../Card/Card";
import "./Board.css";

const Board = (props) => {
  const renderedCharacterCards = props.allCharacters.map((character) => {
    return (
      <div key={Math.floor(Math.random() * 100000)}>
        <Card character={character} onCardClicked={props.onCardClicked} />
      </div>
    );
  });

  return <div className="grid">{renderedCharacterCards}</div>;
};

export default Board;
