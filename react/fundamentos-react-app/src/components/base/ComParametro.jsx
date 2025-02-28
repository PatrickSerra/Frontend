/* eslint-disable react/prop-types */

// Exporta a função `ComParamentro` como o componente principal deste arquivo.
// O `export default` permite que este componente seja importado em outros arquivos.
export default function ComParamentro(props) {
  // Desestruturação das props: extrai `titulo`, `aluno` e `nota` do objeto `props`.
  // Isso facilita o acesso direto a essas propriedades sem precisar usar `props.titulo`, `props.aluno`, etc.
  let { titulo, aluno, nota } = props;

  // Calcula o status do aluno com base na nota.
  // Se a nota for maior que 6, o status será "aprovado"; caso contrário, será "reprovado".
  let status = nota > 6 ? "aprovado" : "reprovado";

  // O componente retorna um bloco de JSX, que é uma sintaxe semelhante a HTML,
  // mas que será transformada em JavaScript pelo React.
  return (
    // Fragment para retornar mais de um elemento se um div adicional
    <>
      {/* O título é renderizado dentro de um elemento h2.
                O valor de `titulo` é passado como conteúdo do h2. */}
      <h2>{titulo}</h2>

      {/* Um parágrafo é renderizado, contendo informações sobre o aluno, sua nota e o status.
                Os valores de `aluno`, `nota` e `status` são interpolados dentro do JSX. */}
      <p>
        <strong>{aluno}</strong> tem nota
        <strong> {nota} </strong> e foi {status}.
      </p>
    </>
  );
}
