import React, { useState } from "react";

function ChallengeOne() {
  const [numberChoice, setnumberChoice] = useState(0);
  const [result, setResult] = useState("");
  return (
    <div className="question">
      <h2>Tecle algum numero</h2>
      <input
        onChange={(n) => {
          setnumberChoice(n.target.value);
        }}
      />
      <p>{result}</p>
      <button
        onClick={() => {
          console.log(numberChoice);
          if (numberChoice == 10) {
            setResult("Numero premiado");
          } else {
            setResult("Numero errado");
          }
        }}
      >
        Verificar numero
      </button>
    </div>
  );
}

export default ChallengeOne;
