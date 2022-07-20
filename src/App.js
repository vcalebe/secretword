// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from "./data/words";

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// array para gerenciar os stages do game
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(wordsList);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return {word, category}
  }

//start secretWord game
  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickedWordAndCategory();
    console.log(word, category);

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => (l.toLowerCase()));
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }

//process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

//Restart the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
