import { useState } from "react";

import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("abaixo do peso. Seu IMC = " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 25) {
      setMensagem("	Peso normal. Seu IMC = " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 30) {
      setMensagem("Acima do peso (sobrepeso). Seu IMC = " + imc.toFixed(2));
    } else if (imc >= 30 && imc < 35) {
      setMensagem("Obesidade grau I. Seu IMC = " + imc.toFixed(2));
    } else if (imc >= 35 && imc < 40) {
      setMensagem("Obesidade grau II. Seu IMC = " + imc.toFixed(2));
    }else if(imc >= 40 ){
      setMensagem("Obesidade grau III. Seu IMC = " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Cacular</button>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
