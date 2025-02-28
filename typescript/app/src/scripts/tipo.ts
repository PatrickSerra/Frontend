// string
let nome: string = "João";
console.log(nome);
// nome = 28

// numbers
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

//tupla
let endereco: [string, number] = ["Av principal", 99];

console.log(endereco);

//enums
enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul, //101
}

let minhaCor: Cor = Cor.Verde;
console.log();
console.log(minhaCor);

//any
let carro: any = "BMW";
console.log(carro);

carro = { marca: "BMW", ano: 2019 };

//funções
function retornaNome(): string {
  return nome;
}

console.log(retornaNome());

function digaOi(): void {
  console.log("Oi");
}

console.log(digaOi());

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

console.log(multiplicar(1, 2));

let somar = function (a: number, b: number): number {
  return a + b;
};

console.log(somar(2, 3));

let calculo: (n1: number, n2: number) => number;

calculo = somar;

console.log(calculo(1, 2));

//Objetos

let usuario: { nome: string; idade: number } = {
  nome: "Joao",
  idade: 27,
};

console.log(usuario);

//erro
// usuario = {
//     name: 'Maria',
//     age: 28
// }

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
  supervisores: ["Carla", "Pedro", "João"],

  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    }

    return "Fora do Horário";
  },
};

console.log(funcionario);


let funcionario2: Funcionario = {
    supervisores: ["Carla", "Pedro", "João"],
  
    baterPonto(horario: number): string {
      if (horario <= 8) {
        return "Ponto normal";
      }
  
      return "Fora do Horário";
    },
  };

console.log(funcionario2);

//Union types 

let nota: number | string = 10;

console.log(`Minha nota é ${nota}`);

//never 

function falha(msg: string): never {
     throw new Error(msg);
}

const produto  = {
    nome: 'Sabão',
    preco: 10,
    validarProduto() {
        if( !this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }

        if(this.preco <=0) {
            falha('Preco inválido');
        }
    }
}

produto.validarProduto()

let alturaOpcional: number = 12 
//alturaOpcional = 'd';

console.log(alturaOpcional);

let podeSernulo = null;
console.log(podeSernulo);

type ContaBancaria = {
   saldo: number, 
   depositar: (valor: number) => void 
}

//desafio 

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  }
}

type Correntista = {
  nome: string, 
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98736723']

}

correntista.contaBancaria.depositar(3000)
console.log(correntista);



