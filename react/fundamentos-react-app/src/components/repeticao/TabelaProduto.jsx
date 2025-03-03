// Importa a lista de produtos de um arquivo JSON
import produtos from "../data/produtos.json";

/**
 * Componente `tabelaProduto` que renderiza uma tabela de produtos.
 * Cada produto é exibido em uma linha da tabela, mostrando seu ID, nome e preço.
 *
 * @returns {JSX.Element} Uma tabela estilizada contendo os produtos.
 */
const tabelaProduto = () => {
  // Objeto de estilos para a tabela e seus elementos
  const styles = {
    table: {
      width: "100%", // Largura da tabela
      borderCollapse: "collapse", // Remove espaços entre as células
      fontFamily: "inherit", // Fonte herdada do elemento pai
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra sutil
    },
    th: {
      backgroundColor: "purple", // Cor de fundo do cabeçalho
      color: "white", // Cor do texto
      padding: "12px 15px", // Espaçamento interno
      textAlign: "center", // Alinhamento do texto
      borderBottom: "5px solid #919bc5", // Borda inferior
    },
    td: {
      padding: "10px 15px", // Espaçamento interno
      borderBottom: "1px solid #ddd", // Borda inferior sutil
    },
    tr: {
      transition: "background-color 0.3s ease", // Transição suave ao passar o mouse
    },
    trHover: {
      backgroundColor: "#f1f1f1", // Cor de fundo ao passar o mouse
    },
  };

  // Mapeia a lista de produtos para criar as linhas da tabela
  const produtosLinhas = produtos.map((produto) => {
    return (
      <tr key={produto.id} style={styles.tr}>
        <td style={styles.td}>{produto.id}</td>
        <td style={styles.td}>{produto.nome}</td>
        <td style={styles.td}>{produto.preco.toFixed(2)}</td>
      </tr>
    );
  });

  // Retorna a tabela estilizada com os produtos
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Id</th>
            <th style={styles.th}>Nome</th>
            <th style={styles.th}>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosLinhas}</tbody>
      </table>
    </div>
  );
};

export default tabelaProduto;