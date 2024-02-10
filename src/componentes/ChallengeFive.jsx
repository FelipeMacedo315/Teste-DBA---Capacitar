import React, { useEffect, useState } from "react";

function ChallengeFive() {
  const [userOptSelect, SetUserOptSelect] = useState("");
  const [machineOptSelect, SetMachineOptSelect] = useState("");
  const [winnerMsg, setWinnerMsg] = useState("");
  const opt = ["Pedra", "Papel", "Tesoura"];
  const [descriptionGame, setDescriptionGame] = useState("");

  const randomObjects = () => {
    let randomMachine = Math.floor(Math.random() * 3) + 1;
    SetMachineOptSelect(opt[randomMachine - 1]);
  };

  useEffect(() => {
    roleGame();
    setDescriptionGame(
      "Eu escolhi " + machineOptSelect + " e você escolheu " + userOptSelect
    );
  }, [machineOptSelect]);

  const roleGame = () => {
    // role for not winnners
    if (userOptSelect === machineOptSelect) {
      setWinnerMsg("Empate! ");
    }
    if (userOptSelect.length === 0 || machineOptSelect.length === 0) {
      setWinnerMsg("");
    }

    // roles for user win
    if (userOptSelect === "Pedra" && machineOptSelect === "Tesoura") {
      setWinnerMsg("Você ganhou! ");
    }
    if (userOptSelect === "Tesoura" && machineOptSelect === "Papel") {
      setWinnerMsg("Você ganhou!");
    }
    if (userOptSelect === "Papel" && machineOptSelect === "Pedra") {
      setWinnerMsg("Você ganhou!");
    }

    // roles for machine win
    if (machineOptSelect === "Pedra" && userOptSelect === "Tesoura") {
      setWinnerMsg("Eu ganhei! ");
    }
    if (machineOptSelect === "Tesoura" && userOptSelect === "Papel") {
      setWinnerMsg("Eu ganhei!");
    }
    if (machineOptSelect === "Papel" && userOptSelect === "Pedra") {
      setWinnerMsg("Eu ganhei!");
    }
  };

  return (
    <div className="question">
      <h2>Vamos jogar jokenpo! </h2>
      <label>
        Escolha entre os objetos abaixo que eu tambem vou fazer a minha escolha.
      </label>
      <div className="jokenpo-options">
        <input
          value="Pedra"
          onChange={(v) => SetUserOptSelect(v.target.value)}
          name="option"
          type="radio"
        />
        <span> Pedra</span>
      </div>
      <div className="jokenpo-options">
        <input
          value="Papel"
          onChange={(v) => SetUserOptSelect(v.target.value)}
          name="option"
          type="radio"
        />
        <span> Papel</span>
      </div>
      <div className="jokenpo-options">
        <input
          value="Tesoura"
          onChange={(v) => SetUserOptSelect(v.target.value)}
          name="option"
          type="radio"
        />
        <span> Tesoura</span>
      </div>
      <button
        onClick={() => {
          randomObjects();
        }}
      >
        Clique para ver o resultado
      </button>
      <h3>{winnerMsg}</h3>
      <h4>
        {machineOptSelect.length === 0 || userOptSelect.length === 0
          ? ""
          : `${descriptionGame}`}
      </h4>
    </div>
  );
}

export default ChallengeFive;
