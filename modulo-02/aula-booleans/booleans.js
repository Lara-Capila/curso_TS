"use strict";
// Exemplo 1
// é possível definir o que é esperado como retorno da função
// usando type Annotation após a lista de parâmetros;
function somaNotas(nota1, nota2) {
    let passouDeAno = false;
    const soma = nota1 + nota2;
    if (soma >= 60) {
        passouDeAno = true;
    }
    return passouDeAno;
}
;
console.log(somaNotas(30, 30));
