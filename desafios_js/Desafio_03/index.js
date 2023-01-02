// Escreva uma função que receba um array e retorne um array invertido
// sem usar reverse, map, foreach e sem alterar o array inicial.

var array_recebido = [1, 2, 3, 4, 5, 6, 7];
var array_resultado = [];
var j = array_recebido.length - 1;
var k = j;

for (var i = 0; i <= k; i++) {
    array_resultado[j] = array_recebido[i];
    j--;
}

console.log(array_resultado);
