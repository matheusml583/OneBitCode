// Escreva uma função que receba um numero inteiro e retorne a quantidade
// equivalente de "chunks".
// Ex: 3 = chunk-chunk-chunk

var chunk = "chunk";
var entrada = 2;
var saida = "";

function chunkmaker(entrada, saida) {
    if (entrada == 1) {
        saida = chunk;
    } else {
        for (var i = entrada; i > 0; i--) {
            saida += chunk;
        }
    }
    return saida;
}

console.log(chunkmaker(entrada, saida));
