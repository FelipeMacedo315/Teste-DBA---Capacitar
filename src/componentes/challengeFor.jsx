import React, { useEffect, useState } from "react";

function ChallengeFor() {
  const [sixnumber, setSixNumber] = useState([]);
  const [bigNumber, setBigNumber] = useState("");
  const [smallNumber, setSmallNumber] = useState("");

  return (
    <div className="question">
      <h2>Clique para ver 6 numeros aleatorios</h2>
      <p>{sixnumber}</p>
      <button
        onClick={() => {
          let newNumbers = [];
          for (let index = 0; index < 6; index++) {
            newNumbers.push(Math.floor(Math.random() * 100));
          }
          newNumbers.length = 6;
          let findBigNumber = newNumbers[0];
          let findSmallNumber = newNumbers[0];
          for (let index = 1; index < newNumbers.length; index++) {
            if (newNumbers[index] > findBigNumber) {
              findBigNumber = newNumbers[index];
            }
          }

          for (let index = 1; index < newNumbers.length; index++) {
            if (newNumbers[index] < findSmallNumber) {
              findSmallNumber = newNumbers[index];
            }
          }
          setBigNumber(findBigNumber);
          setSmallNumber(findSmallNumber);
          setSixNumber(newNumbers.join(" | ").toString());
        }}
      >
        Clique
      </button>
      <p>
        O maior dentre os seis é : {bigNumber} e o menor é {smallNumber}
      </p>
    </div>
  );
}

export default ChallengeFor;
