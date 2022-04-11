import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import Sign from "./components/Sign/Sign";

const Board = React.lazy(() => import("./components/Board/Board"));

function App() {
  const [characters, setCharacters] = useState([]);
  const [cardsChosenIds, setCardsChosenIds] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsWon, setCardsWon] = useState([]);

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

  const flipCard = (e) => {};

  const checkMatch = () => {
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
      alert("You have clicked the same image");
    }
  };

  const handleCardClicked = (cardId) => {
    if (cardsChosenIds.length > 1) {
      setCardsChosenIds([]);
    } else {
      setCardsChosenIds([...cardsChosenIds, cardId]);
    }
  };

  return (
    <div className="container ">
      <h1 className="title"> The Rick &amp; Morty Memory Match Game </h1>
      <Suspense
        fallback={
          <div>
            <p style={{ color: "white" }} className="text-center">
              Loading cards ...{" "}
            </p>
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        }
      >
        <Board
          allCharacters={characters}
          cardsChosenIds={cardsChosenIds}
          onCardClicked={handleCardClicked}
        />
      </Suspense>
      {console.log(cardsChosenIds)}
      <Sign />
    </div>
  );
}

export default App;
