import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "./components/Board/Board";
import Sign from "./components/Sign/Sign";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharactersFromApi = () => {
      return fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((responseData) => {
          let arrAllCharacters = [
            ...responseData.results,
            ...responseData.results,
          ];
          arrAllCharacters.sort(() => 0.5 - Math.random());
          setCharacters(arrAllCharacters);
        })

        .catch((error) => console.log(error));
    };
    getCharactersFromApi();
  }, []);

  return (
    <div className="container ">
      <h1 className="title"> The Rick &amp; Morty Memory Match Game </h1>
      <Board allCharacters={characters} />

      <Sign />
    </div>
  );
}

export default App;
