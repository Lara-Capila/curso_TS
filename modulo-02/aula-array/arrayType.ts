// Exemplo 1 - Uso de Colchetes:
const frutas: string[] = ['Laranja', 'Maça', 'Melancia', 'Banana'];
console.log(frutas[2]);

// Exemplo 2 - Uso Array Object:
const frutas1: Array<string> = ['Laranja', 'Maça', 'Melancia', 'Banana'];
console.log(frutas1[2]);

// Exemplo 3
const nomes: Array<object> = [{nome: "lara", sobrenome: 'Capila'}, {idade: 22}];
console.log(nomes);

// Exemplo 4
let dados: {
  nome: string;
  idade: number
};
const nomes2: Array<object> = [dados = {nome: "lara", idade: 22}];
console.log(nomes2);

// Exemplo 5 - Iteração
const linguagensArray: Array<string> = ['JavaScript', 'Python', 'c++', 'Java'];

function percorreLinguagens(linguagens:string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagensArray[i]); 
  }
}

console.log(percorreLinguagens(linguagensArray));