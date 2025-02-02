function Pessoa(nome) {
  this.nome = nome;
  setTimeout(() => {
      console.log(`Olá, meu nome é ${this.nome}`);  // 'this' aqui se refere ao contexto global
  }, 1000);
}

const pessoa = new Pessoa("João");  // "Olá, meu nome é undefined"
