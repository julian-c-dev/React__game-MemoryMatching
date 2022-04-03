import "./App.css";
import React, { useState, useEffect } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Sign from "./components/Sign/Sign";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharactersFromApi = () => {
      return fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.log(error));
    };
    getCharactersFromApi();
  }, []);

  return (
    <div className="container ">
      <h1 className="title"> The Rick &amp; Morty Memory Match Game </h1>
      <Board />
      <Cards>{console.log(characters)}</Cards>
      <Cards />
      <Cards />
      <Sign />
    </div>
  );
}

export default App;
