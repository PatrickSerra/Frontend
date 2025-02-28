/* eslint-disable react/prop-types */

const aleatorio = (props) => {
    // Desestruturação das propriedades recebidas
    const { max, min } = props;
    
    // Geração de um número aleatório dentro do intervalo fornecido
    let numero_escolhido = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            <h2>Componente Aleatório</h2>
            
            {/* Exibição do valor mínimo */}
            <p>
                <strong>Valor mínimo: {min}</strong> <br />
            </p>
            
            {/* Exibição do valor máximo */}
            <p>
                <strong>Valor máximo: {max}</strong>
            </p>
            
            {/* Correção: Removendo duplicação do valor máximo */}
            <p>
                <h3>Número escolhido: {numero_escolhido}</h3> 
            </p>
        </div>
    );
}

export default aleatorio;