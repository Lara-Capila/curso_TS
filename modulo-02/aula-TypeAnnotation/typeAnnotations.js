"use strict";
// Variáveis [Type Annotations]
const nome = "Lara";
console.log(nome);
// Arrays [Type Annotations]
const animais = ['Vaca', 'Cavalo', 'Elefante', "Onça"];
console.log(animais);
// Objetos [Type Annotations]
let usuario;
usuario = { nome: 'Lara', idade: 22, email: 'laracapilak@gmail.com' };
console.log(usuario);
// Funções [Type Annotations]
const multiplicaNumeros = (primeiro, segundo) => {
    const resultado = primeiro * segundo;
    return resultado;
};
console.log(multiplicaNumeros(2, 3));
