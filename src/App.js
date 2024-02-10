import { useState } from "react";
import "./App.css";
import ChallengeOne from "./componentes/challengeOne";
import ChallengeTwo from "./componentes/challengeTwo";
import ChallengeTree from "./componentes/challengeTree";
import ChallengeFor from "./componentes/challengeFor";
import ChallengeFive from "./componentes/ChallengeFive";
import ChallengeBonus from "./componentes/ChallengeBonus";

function App() {
  return (
    <div className="App">
      <h1>Desafio - DBA Capacitar</h1>
      <ChallengeOne />
      <ChallengeTwo />
      <ChallengeTree />
      <ChallengeFor />
      <ChallengeFive />
      <ChallengeBonus />
    </div>
  );
}

export default App;
