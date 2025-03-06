function Item({ nome, estaEmpacotado, importancia }) {
  return (
    <li className="item">
      {nome}
      {importancia > 0 && " "}
      {importancia > 0 && <i>(Relevância: {importancia})</i>}
      {estaEmpacotado ? " ✅ " : " ❌ "}
    </li>
  );
}

export default Item;
