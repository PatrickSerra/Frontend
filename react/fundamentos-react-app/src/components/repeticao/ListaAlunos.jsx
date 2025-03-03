// Importa a lista de alunos de um arquivo JSON
import alunos from "../data/alunos.json";

/**
 * Componente `listaAlunos` que renderiza uma lista de alunos.
 * Cada aluno é exibido em um item de lista (`<li>`), mostrando seu ID, nome e nota.
 *
 * @returns {JSX.Element} Uma lista não ordenada (`<ul>`) contendo os alunos.
 */
const listaAlunos = () => {
  // Mapeia a lista de alunos para criar elementos JSX (<li>) para cada aluno
  const alunosLis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} - {aluno.nome} {aluno.nota}
      </li>
    );
  });

  // Retorna uma lista não ordenada (<ul>) com os alunos renderizados
  return <ul style={{ listStyle: "none", padding: "20px" }}>{alunosLis}</ul>;
};

export default listaAlunos;