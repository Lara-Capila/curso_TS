// Variáveis [Type Annotations]
const nome: string = "Lara";
console.log(nome);

// Arrays [Type Annotations]
const animais: string[] = ['Vaca', 'Cavalo', 'Elefante', "Onça"];
console.log(animais);

// Objetos [Type Annotations]
let usuario: {
  nome: string;
  idade: number;
  email: string
};

usuario = {nome: 'Lara', idade: 22, email: 'laracapilak@gmail.com'};
console.log(usuario);

// Funções [Type Annotations]
const multiplicaNumeros = (primeiro: number, segundo: number) => {
  const resultado: number = primeiro * segundo;
  return resultado; 
}

console.log(multiplicaNumeros(2,3));
