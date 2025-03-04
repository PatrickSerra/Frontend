import { useState } from "react";
import "./input.css";

/**
 * Componente funcional que representa um campo de entrada de texto.
 * O valor digitado pelo usuário é armazenado no estado e atualizado dinamicamente.
 */
const Input = () => {
  // Estado que armazena o valor do input
  const [valor, setValor] = useState("Inicial");

  /**
   * Manipula a mudança do valor no input e atualiza o estado.
   *
   * @param {Object} e - Evento de mudança do input.
   */
  function handleChange(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      {/* Exibe o valor atual do input */}
      <h2>{valor}</h2>

      {/* Campo de entrada controlado */}
      <input
        type="text"
        aria-label="Change value"
        value={valor}
        onChange={handleChange}
      />

      {/* Exemplos comentados de outros inputs */}
      {/* <input aria-label="read-only" type="text" value={valor} readOnly/> */}
      {/* <input aria-label="not controlled" type="text" /> */}
    </div>
  );
};

export default Input;
