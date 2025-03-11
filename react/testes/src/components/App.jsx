import "./App.css";


function App() {
  function handleClick(event) {
     console.log("Tipo de evento:", event.type);
     console.log("Elemento alvo:", event.target);
     console.log("Elemento atual:", event.currentTarget);
     
     
  }

  function showMessage(message) {
     alert(message)
  }

  function handleSubmit(event) {
     event.preventDefault();
     console.log('Formulario enviado');
     
  }


  return ( 
      // <div className="app" onClick={handleClick}>
      //   <button onClick={handleClick}>Clique aqui</button>
      // </div>
      <form onSubmit={handleSubmit}>
          <button type="submit">Enviar</button>
      </form>
   );
}

export default App;