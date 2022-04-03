import "./App.css";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Sign from "./components/Sign/Sign";

function App() {
  return (
    <div className="container ">
      <h1 className="title"> The Rick &amp; Morty Memory Match Game </h1>
      <Board />
      <Cards />
      <Cards />
      <Cards />
      <Sign />
    </div>
  );
}

export default App;
