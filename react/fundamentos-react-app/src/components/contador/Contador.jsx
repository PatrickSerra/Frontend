/* eslint-disable react/prop-types */
import { Component } from "react";
import './contador.css'; // Importa o arquivo CSS para estilização do componente
import Display from "./Display"; // Componente responsável por exibir o número atual
import FormularioPasso from "./FormularioPasso"; // Componente que define o passo da contagem
import Botoes from "./Botoes"; // Componente com botões de incrementar e decrementar

/**
 * Componente de classe Contador
 * 
 * Um contador que permite incrementar e decrementar um número com um passo configurável.
 * O número inicial e o passo podem ser passados como props.
 */
class Contador extends Component {
  /**
   * Estado inicial do componente.
   * @property {number} numero - Valor atual do contador.
   * @property {number} passo - Incremento ou decremento a ser aplicado.
   */
  state = {
    numero: this.props.numeroInicial || 0, // Define o número inicial, se fornecido via props
    passo: this.props.passoInicial || 5, // Define o passo inicial, se fornecido via props
  };

  /**
   * Incrementa o valor do contador com base no estado atual.
   */
  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  /**
   * Decrementa o valor do contador com base no estado atual.
   */
  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  /**
   * Atualiza o valor do passo com base no input do usuário.
   * @param {Event} e - Evento de mudança do input.
   */
  setPasso = (e) => {
    this.setState({
      passo: +e.target.value, // Converte o valor do input para número
    });
  };

  /**
   * Renderiza o componente Contador.
   * 
   * Inclui o número atual, o formulário para ajuste do passo
   * e os botões para incrementar e decrementar.
   */
  render() {
    return (
      <div className="contador"> {/* Classe principal do contador */}
        <h2 className="contador__titulo">Contador</h2> {/* Título do contador */}
        <Display numero={this.state.numero} /> {/* Exibe o número atual */}
        <FormularioPasso value={this.state.passo} callback={this.setPasso} /> {/* Input para ajuste do passo */}
        <Botoes incrementar={this.incrementar} decrementar={this.decrementar} /> {/* Botões de controle */}
      </div>
    );
  }
}

export default Contador;