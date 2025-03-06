import Item from "./Item";

function ListaDeBagem() {
  return (
    <section>
      <h1>Lista de Bagagem de Sally Ride</h1>
      <ul>
        <Item estaEmpacotado={true} nome="Traje espacial" />
        <Item
          estaEmpacotado={true}
          importancia={5}
          nome="Capacete de folha dourada"
        />
        <Item estaEmpacotado={false} nome="Foto de Tam" />
      </ul>
    </section>
  );
}

export default ListaDeBagem;
