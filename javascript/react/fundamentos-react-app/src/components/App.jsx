import First from "./base/First";
import ComParamentro from "./base/ComParametro";
import "./main.css";

const App = () => (
  <div id="app">
    <First></First>
    <ComParamentro titulo="Situação do Aluno" aluno="Patrick" nota={10} />
    <ComParamentro titulo="Situação do Aluno" aluno="Paloma" nota={10} />
  </div>
);

export default App;
