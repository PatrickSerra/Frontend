// Criando o botão de alternância
const themeToggleButton = document.createElement("button");
themeToggleButton.id = "theme-toggle";
themeToggleButton.textContent = "🌙"; // Ícone inicial para o modo escuro
themeToggleButton.classList.add("toggle-button"); // Adiciona uma classe para o estilo

// Adicionando o botão ao corpo da página
document.body.appendChild(themeToggleButton);

// Função para alternar os temas
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode"); // Alterna a classe para o tema claro
  document.querySelector(".kss-style").classList.toggle("light-mode"); // Alterna a classe no estilo

  // Altera o ícone do botão de alternância
  if (document.body.classList.contains("light-mode")) {
    themeToggleButton.textContent = "🌞"; // Ícone de sol para o modo claro
  } else {
    themeToggleButton.textContent = "🌙"; // Ícone de lua para o modo escuro
  }
});
