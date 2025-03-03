import { cloneElement } from "react";

/**
 * Componente `familia` que recebe `props` e renderiza seus filhos (`props.children`),
 * clonando cada filho e adicionando as `props` do componente `familia` a cada um deles.
 *
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {ReactNode} props.children - Os elementos filhos do componente.
 * @returns {JSX.Element} Um elemento `div` contendo os filhos clonados com as `props` adicionais.
 */
const familia = (props) => {
  return (
    <div>
      {
        // Itera sobre os filhos (`props.children`) usando o método `map`
        props.children.map((child, i) => {
          // Para cada filho, clona o elemento e adiciona as `props` do componente `familia`
          // Além disso, adiciona uma `key` única para evitar warnings do React
          return cloneElement(child, { ...props, key: i });
        })
      }
    </div>
  );
};

export default familia;