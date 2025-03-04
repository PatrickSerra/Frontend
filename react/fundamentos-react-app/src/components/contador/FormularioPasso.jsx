/* eslint-disable react/prop-types */

/**
 * Componente FormularioPasso
 * 
 * Este componente exibe um input numérico para definir o valor do passo no contador.
 * 
 * @param {Object} props - Propriedades recebidas pelo componente.
 * @param {number} props.value - Valor atual do passo.
 * @param {function} props.callback - Função chamada quando o valor do input muda.
 */
const FormularioPasso = (props) => {
    return (
      <div className="contador__passo"> 
        <label htmlFor="passoInput" className="contador__passo-label">Passo:</label> {/* Classe para o label */}
        <input
          id="passoInput"
          type="number"
          value={props.value} // Define o valor do input com base na prop recebida
          onChange={props.callback} // Chama a função callback quando o valor é alterado
          className="contador__passo-input" // Classe para o input
        />
      </div>
    );
  };
  
  export default FormularioPasso;
  