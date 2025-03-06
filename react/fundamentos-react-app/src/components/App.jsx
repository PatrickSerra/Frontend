import "./App.css";
import First from "./base/First";
import ComParamentro from "./base/ComParametro";
import Aleatorio from "./base/Aleatorio";
import Card from "./layout/Card";
import Familia from "./base/Familia";
import FamiliaMembro from "./base/FamilaMembro";
import ListaAlunos from "./repeticao/ListaAlunos";
import TabelaProduto from "./repeticao/TabelaProduto";
import ParOuImpar from "./condicional/ParOuImpar";
import UsurarioInfo from "./condicional/UsuarioInfo";
import DiretaPai from "./comunicacao/DiretaPai";
import IndiretaPai from "./comunicacao/IndiretaPai";
import Input from "./formulario/Input";
import Contador from "./contador/Contador";
import Gallery from "./Galeria/Gallery";
import ListaDeBagem from "./condicional/ListaDeBagem";

const App = () => (
  <div id="app" className="app">
    <h1>Fundamentos do React</h1>

    <div className="cards">
      <Card titulo="Primeiro Componente" color="#FA6900">
        <First></First>
      </Card>

      <Card titulo="Componentes com parametros" color="#E94C6F">
        <ComParamentro titulo="Situação do Aluno" aluno="Patrick" nota={10} />
        <ComParamentro titulo="Situação do Aluno" aluno="Paloma" nota={10} />
      </Card>

      <Card titulo="Desafio aleátorio" color="#080">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="Componente com filhos" color="crimson">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Joaquim" />
          <FamiliaMembro nome="Erica" />
        </Familia>
      </Card>

      <Card titulo="Repetição" color="skyblue">
        <ListaAlunos />
      </Card>

      <Card titulo="Desafio - Tabela produtos" color="violet">
        <TabelaProduto />
      </Card>

      <Card titulo="Renderização condicional" color="#c1a2a0">
        <ParOuImpar numero={21} />
        <UsurarioInfo usuario={{ nome: "Patrick" }}></UsurarioInfo>
        <UsurarioInfo></UsurarioInfo>
        <ListaDeBagem /> 
      </Card>

      <Card titulo="Comunicação direta componentes" color="darkblue">
        <DiretaPai />
      </Card>

      <Card titulo="Comunicação indireta componentes" color="gold">
        <IndiretaPai />
      </Card>

      <Card titulo="Componente Controlado(Input)" color="brown">
          <Input></Input>
      </Card>

      <Card titulo="Contador" color="darkgray">
         <Contador numeroInicial={100} />
      </Card>

      <Card titulo="Galeria" color="red">
         <Gallery/>
      </Card>

      <Card titulo="Lista de bagagem com renderização condicional" color="#c1a2a0">
        <ListaDeBagem /> 
      </Card>


    </div>
  </div>
);

export default App;
