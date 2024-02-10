import React, { useState } from "react";

function ChallengeBonus() {
  const [priceProduct, setPriceProduct] = useState("");
  const [quanty, setQuanty] = useState("");
  const [nome, SetNome] = useState("");
  const [desconto, SetDesconto] = useState(0);
  const [total, setTotal] = useState("");

  return (
    <div className="question">
      <h2>Informe as informações do produto no campos abaixo</h2>
      <div className="fields">
        <label>
          Nome do produto
          <input onChange={(v) => SetNome(v.target.value)} type="text" />
        </label>
        <label>
          Preço
          <input
            onChange={(v) => setPriceProduct(v.target.value)}
            type="text"
          />
        </label>
        <label>
          Quantidade{" "}
          <input onChange={(v) => setQuanty(v.target.value)} type="number" />
        </label>
        <button
          onClick={() => {
            if (quanty <= 11) {
              SetDesconto(0);
            }
            if (quanty >= 11 && quanty <= 20) {
              SetDesconto(10);
            }
            if (quanty >= 21 && quanty <= 50) {
              SetDesconto(20);
            }
            if (quanty > 50) {
              SetDesconto(25);
            }
            setTotal(priceProduct * quanty);
          }}
        >
          Calcular preço
        </button>
      </div>
      <li>NOME : {nome}</li>
      <li>QUANTIDADE : {quanty}</li>
      <li>VALOR A SER PAGO: {total - total * (desconto / 100)}</li>
      <li>TAXA DE DESCONTO : {desconto}</li>
    </div>
  );
}

export default ChallengeBonus;
