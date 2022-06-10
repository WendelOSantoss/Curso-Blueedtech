const prompt = require('prompt-sync')();
console.clear();

let jogodavelha = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let jogada = "x"

let linha= +prompt("Digite a linha que quer fazer sua jogada")
let coluna = +prompt("Digite a coluna que quer fazer sua jogada")

const condicaodevitoria=[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],
]

for(const condicaodevitoria of condicaodevitoria){
  for(const coordenada of condicaodevitoria){
    let linha = parseint(coordenada/3);
    let coluna = coordenada % 3;

  }
}



jogodavelha[linha][coluna]= jogada




console.log(jogodavelha);



























