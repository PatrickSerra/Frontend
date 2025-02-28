import First from "./base/First";
import ComParamentro from "./base/ComParametro";
import Aleatorio from "./base/Aleatorio";
import Card from "./layout/Card";
import "./App.css";

const App = () => (
  <div id="app" className="app">
    <h1>Fundamentos do React</h1>
    <Card titulo="Primeiro Componente">
        <First></First>
    </Card>

    <Card titulo="Componentes com parametros">
      <ComParamentro titulo="Situação do Aluno" aluno="Patrick" nota={10} />
      <ComParamentro titulo="Situação do Aluno" aluno="Paloma" nota={10} />
    </Card>

    <Card titulo="Desafio aleátorio">
        <Aleatorio min={1} max={100} />    
    </Card>
    
  </div>
);

export default App;
