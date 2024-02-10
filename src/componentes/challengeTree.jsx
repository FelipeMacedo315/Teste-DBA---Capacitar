import React, { useState } from "react";

function ChallengeTree() {
  const [number, setNumber] = useState(0);
  const [printTabuada, setPrintTabuada] = useState([]);
  const tabuada = () => {
    printTabuada.length = 10;
    if (number > 0) {
      for (let index = 0; index <= 10; index++) {
        let lineTabuada =
          number.toString() + " x " + index.toString() + " = " + number * index;
        printTabuada.push(lineTabuada);
      }
    }
  };

  return (
    <div className="question">
      <h2>
        Tecle algum numero e lhe mostraremos a sua tabuada até o numero 10
      </h2>
      <input onChange={(n) => setNumber(n.target.value)} type="text" />
      {printTabuada.map((el) => {
        return <span>{el}</span>;
      })}
      {tabuada()}
    </div>
  );
}

export default ChallengeTree;
