// Escreva uma função que receba 5 números inteiros e retorne a média entre eles

var numeros = [1, 56, 32, 49];
var count = 0;
var soma = 0;

function media() {
    numeros.forEach((elemento) => {
        soma += elemento;
        count++;
    });
    return soma / count;
}

console.log(media());
