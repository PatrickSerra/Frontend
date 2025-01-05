// Para todos os campos de entrada de tipo 'email'
document.querySelectorAll('input[type="email"]').forEach((emailField) => {
  // Adiciona um evento de 'input' para monitorar mudanças no campo de email
  emailField.addEventListener("input", function () {
    // Verifica se o valor do campo de email contém um "@" para determinar se é um email válido (muito básico)
    const isValid = emailField.value.includes("@");
    
    // Altera a cor da borda do campo de input dependendo se o email é válido ou não
    emailField.style.borderColor = isValid ? "green" : "red"; // Se válido, borda fica verde, senão, vermelha
  });
});

// Para todos os campos de entrada de tipo 'password'
document.querySelectorAll('input[type="password"]').forEach((passwordInput) => {
  // Cria um contêiner 'div' que vai envolver o input e o botão
  const container = document.createElement("div");
  container.classList.add("password-container"); // Adiciona uma classe 'password-container' para estilização
  
  // Insere o input de senha dentro do novo contêiner
  passwordInput.parentNode.insertBefore(container, passwordInput); // Move o input para dentro do contêiner
  container.appendChild(passwordInput); // Adiciona o input de senha ao contêiner

  // Cria um botão para alternar entre mostrar e esconder a senha
  const toggleButton = document.createElement("button");
  toggleButton.type = "button"; // O botão não envia o formulário
  toggleButton.classList.add("password-toggle"); // Adiciona uma classe para estilizar o botão
  toggleButton.innerHTML = "👁"; // O ícone inicial é um olho, indicando "mostrar senha"
  
  // Adiciona um evento de clique para alternar entre esconder e mostrar a senha
  toggleButton.addEventListener("click", () => {
    // Verifica o tipo do campo de senha (se é 'password' ou 'text')
    const isPassword = passwordInput.type === "password";
    
    // Alterna o tipo do input de 'password' para 'text' (e vice-versa) para mostrar ou esconder a senha
    passwordInput.type = isPassword ? "text" : "password";
    
    // Alterar o ícone do botão para representar a mudança (olho aberto ou fechado)
    toggleButton.innerHTML = isPassword ? "🙈" : "👁"; // "🙈" para esconder, "👁" para mostrar
  });

  // Adiciona o botão ao contêiner
  container.appendChild(toggleButton); // O botão de alternância agora aparece dentro do contêiner com o input
});
