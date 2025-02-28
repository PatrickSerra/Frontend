let canal: string = "Gaveta";
let inscritos: number = 610234;

//canal = inscritos;
console.log(canal);
console.log(inscritos);

let nome = "Pedro";
console.log(nome);

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;

qualquerCoisa = 12;
qualquerCoisa = "abc";

console.log(qualquerCoisa);

function saudar(isManha: boolean): string {
  let saudacao: string;

  if (isManha) {
    saudacao = "Bom dia";
  } else {
    saudacao = "Tenha uma boa vida!";
  }

  return saudacao;
}
