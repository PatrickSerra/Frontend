/* eslint-disable react/prop-types */

/**
 * Componente Display
 * 
 * Exibe o número atual do contador.
 * 
 * @param {Object} props - Propriedades recebidas pelo componente.
 * @param {number} props.numero - Valor atual do contador a ser exibido.
 */
const Display = (props) => {
    return <h3 className="contador__numero">{props.numero}</h3>; // Aplica a classe BEM para o número
  };
  
  export default Display;
  