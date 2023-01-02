// Escreva uma função que receba um número, separe e eleve cada digito ao quadrado
// após, concatene

var number = 1234567;

function Square(number) {
    number = number.toString().split("");
    var j = number.length - 1;
    for (var i = 0; i <= j; i++) {
        number[i] = parseInt(number[i]);
        number[i] = number[i] ** 2;
    }
    console.log(number);
}

Square(number);
