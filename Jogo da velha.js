const prompt = require('prompt-sync')();
console.clear();

let jogodavelha = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];


let linha= +prompt("Digite a linha que quer fazer sua jogada")
let coluna = +prompt("Digite a coluna que quer fazer sua jogada")


let x = 2

jogodavelha[linha][coluna]= x




console.log(jogodavelha);



























