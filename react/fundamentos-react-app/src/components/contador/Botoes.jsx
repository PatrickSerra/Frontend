/* eslint-disable react/prop-types */

/**
 * Componente Botoes
 * 
 * Este componente exibe dois botões: um para incrementar e outro para decrementar o contador.
 * 
 * @param {Object} props - Propriedades recebidas pelo componente.
 * @param {function} props.incrementar - Função chamada quando o botão "+" é clicado.
 * @param {function} props.decrementar - Função chamada quando o botão "-" é clicado.
 */
const Botoes = (props) => {
  return (
    <div className="contador__botoes"> {/* Classe para o container dos botões */}
      <button className="contador__botoes-btn" onClick={props.decrementar}>-</button> {/* Botão de decremento */}
      <button className="contador__botoes-btn" onClick={props.incrementar}>+</button> {/* Botão de incremento */}
    </div>
  );
};

export default Botoes;
