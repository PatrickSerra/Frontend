/**
 * Componente funcional que representa o filho em uma comunicação indireta
 * com o componente pai.
 *
 * @param {Object} props - Propriedades passadas pelo componente pai.
 * @param {Function} props.callback - Função recebida do pai para passar informações de volta.
 */
const IndiretaFilho = (props) => {
    const { callback } = props;
  
    /**
     * Gera uma idade aleatória dentro do intervalo especificado.
     * 
     * @param {number} min - Valor mínimo da idade (padrão: 50).
     * @param {number} max - Valor máximo da idade (padrão: 70).
     * @returns {number} - Idade gerada aleatoriamente.
     */
    const gerarIdade = (min = 50, max = 70) => 
      parseInt(Math.random() * (max - min) + min);
  
    return (
      <div>
        <div>Filho</div>
        {/* Ao clicar no botão, chama a função callback passando dados fictícios */}
        <button onClick={() => callback("João", gerarIdade(), true)}>
          Fornecer informações
        </button>
      </div>
    );
  };
  
  export default IndiretaFilho;
  
