import React from "react";
import Cards from "../Cards/Cards";
import "./Board.css";

const Board = (props) => {
  const renderedCharacterCards = props.allCharacters.map((character) => {
    return (
      <div key={character.id}>
        <Cards character={character} />
      </div>
    );
  });

  return <div className="grid">{renderedCharacterCards}</div>;
};

export default Board;
