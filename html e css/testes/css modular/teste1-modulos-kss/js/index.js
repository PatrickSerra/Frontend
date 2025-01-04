(function () {
    // Seleciona todos os elementos com a classe 'dropdown__toggle'
    let toggles = document.querySelectorAll(".dropdown__toggle");
    console.log(toggles); // Aqui, vamos ver todos os toggles no console.

    // Para cada toggle, adicionamos um ouvinte de evento
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        // Seleciona o dropdown associado ao botão clicado
        let dropdown = event.target.closest(".dropdown");
        // Alterna a classe 'is-open' para abrir/fechar o dropdown
        dropdown.classList.toggle("is-open");
      });
    });
  })();