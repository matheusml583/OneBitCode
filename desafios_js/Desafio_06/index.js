// Escreva uma função que receba uma string e retorne a letra mais perto do final do alfabeto

var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

function ultima_letra(str) {
    str = str.toLowerCase().split("").sort();
    console.log(str[str.length - 1]);
}

ultima_letra(str);
