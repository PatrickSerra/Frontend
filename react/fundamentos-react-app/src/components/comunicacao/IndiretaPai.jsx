import IndiretaFilho from "./IndiretaFilho";
import { useState } from "react";

/**
 * Componente funcional que representa o pai na comunicação indireta com o filho.
 * O pai recebe dados do filho via uma função callback e atualiza seu estado.
 */
const IndiretaPai = () => {
  // Estados para armazenar os valores recebidos do componente filho
  let [nome, setNome] = useState("?");
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  /**
   * Função que recebe informações do componente filho e atualiza o estado.
   *
   * @param {string} nome - Nome recebido do filho.
   * @param {number} idade - Idade recebida do filho.
   * @param {boolean} nerd - Booleano indicando se a pessoa é "nerd" ou não.
   */
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      {/* Exibe os valores armazenados no estado */}
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>

      {/* Passa a função callback para o componente filho */}
      <IndiretaFilho callback={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
