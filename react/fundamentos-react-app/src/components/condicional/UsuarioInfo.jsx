import { default as If, Else } from "./If";

const UsuarioInfo = (props) => {
  let usuario = props?.usuario;

  return (
    <div>
      {/* <If test={usuario?.nome}>
        <h3>
          Seja bem-vindo <strong>{usuario?.nome}</strong>
        </h3>
      </If>

      <If test={!usuario?.nome}>
        <h3>
          Seja bem-vindo <strong>Anônimo</strong>
        </h3>
      </If> */}

      <If test={usuario?.nome}>
        <h3>
          Seja bem-vindo <strong>{usuario?.nome}</strong>
        </h3>
        <Else>
            <h3>
                Seja bem-vindo <strong>Anônimo</strong>
            </h3>
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
