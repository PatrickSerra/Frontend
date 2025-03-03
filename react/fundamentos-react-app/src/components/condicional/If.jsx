import React from "react";

/**
 * Componente condicional que renderiza seus filhos com base na propriedade `test`.
 * 
 * @param {Object} props - As propriedades do componente.
 * @param {boolean} props.test - Condição para determinar qual filho renderizar.
 * @param {ReactNode} props.children - Conteúdo filho a ser renderizado.
 * 
 * @returns {ReactNode} - O filho a ser renderizado com base na condição `test`.
 */
const If = (props) => {
  // Converte os filhos em um array para garantir que métodos de array possam ser usados
  const childrenArray = React.Children.toArray(props.children);

  // Encontra o filho do tipo 'Else'
  const elseChild = childrenArray.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  // Filtra o primeiro filho que não é do tipo 'Else'
  const ifChildren = childrenArray.filter((child) => {
    return child !== elseChild;
  })[0];

  // Renderiza o filho adequado com base na condição 'test'
  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return null; // Retorna null se nenhum filho correspondente for encontrado
  }
};

export default If;

/**
 * Componente que renderiza seus filhos.
 * 
 * @param {Object} props - As propriedades do componente.
 * @param {ReactNode} props.children - Conteúdo filho a ser renderizado.
 * 
 * @returns {ReactNode} - Os filhos a serem renderizados.
 */
export const Else = (props) => props.children;
