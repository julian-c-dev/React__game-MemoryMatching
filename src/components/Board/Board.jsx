import React from "react";
import Cards from "../Cards/Cards";
import "./Board.css";

const Board = (props) => {
  const renderedCharacterCards = props.allCharacters.map((character) => {
    return (
      <div key={Math.floor(Math.random() * 100000)}>
        <Cards character={character} onCardClicked={props.onCardClicked} />
      </div>
    );
  });

  return <div className="grid">{renderedCharacterCards}</div>;
};

export default Board;
