import React, { useState } from "react";

function ChallengeTwo() {
  const [age, setAge] = useState("");
  return (
    <div className="question">
      <h2>Digite a sua idade</h2>
      <input onChange={(n) => setAge(n.target.value)} type="text" />
      <p>{age >= 18 ? "Você é maior de idade" : "Você é menor de idade"} </p>
    </div>
  );
}
export default ChallengeTwo;
