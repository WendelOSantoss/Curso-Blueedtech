const prompt = require('prompt-sync')();
console.clear();

let velha = [0,1,2,3,4,5,6,7,8];
    let ticTacToe = [[], [], []];
    ticTacToe[2][2] = undefined;
    let ticTacToeLayout = '';
function updateLayout() {
  ticTacToeLayout = `${displayItem(ticTacToe[0][0])} | ${displayItem(
      ticTacToe[0][1],
  )} | ${displayItem(ticTacToe[0][2])}
---------
${displayItem(ticTacToe[1][0])} | ${displayItem(
      ticTacToe[1][1],
  )} | ${displayItem(ticTacToe[1][2])}
---------
${displayItem(ticTacToe[2][0])} | ${displayItem(
      ticTacToe[2][1],
  )} | ${displayItem(ticTacToe[2][2])}`;
}

function displayItem(item) {
  return item === undefined ? ' ' : item;
}
displayItem();
updateLayout();
console.log();

const jogodavelha = Array(9).fill(undefined);
let vitoria = false;
let vencedor;

let jogada = "x";

while(!vitoria){

console.log(`É a vez do jogador ${jogada}`);

const coordenada = +prompt(`Digite onde deseja marcar a sua jogada (0 e 8): `);
        velha[coordenada] = 10;
        console.log();
        if (coordenada == '0' && ticTacToe[0][0] == undefined) {
            (ticTacToe[0][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '1' && ticTacToe[0][1] == undefined) {
            (ticTacToe[0][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '2' && ticTacToe[0][2] == undefined) {
            (ticTacToe[0][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '3' && ticTacToe[1][0] == undefined) {
            (ticTacToe[1][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '4' && ticTacToe[1][1] == undefined) {
            (ticTacToe[1][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '5' && ticTacToe[1][2] == undefined) {
            (ticTacToe[1][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '6' && ticTacToe[2][0] == undefined) {
            (ticTacToe[2][0] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '7' && ticTacToe[2][1] == undefined) {
            (ticTacToe[2][1] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '8' && ticTacToe[2][2] == undefined) {
            (ticTacToe[2][2] = jogada), displayItem();
            updateLayout();
            console.log(ticTacToeLayout);
        }



if (coordenada<0 || coordenada>8){
  console.log ("O numero deve ser entre 0 e 8, digite novamente");
  continue
}


if (jogodavelha[coordenada]){
  console.log ("Essa coordenada já está preenchida. Digite outra");
  continue
}

jogodavelha[coordenada]= jogada;

jogada = jogada ==="x"? "o" : "x"; 

const coordenadasvazias = jogodavelha.filter(Boolean).length;

if (coordenadasvazias===0){
  break
}
     
const condicoesdevitoria= [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8], 
  [2,4,6],
]

if(velha[0] == 10 && velha[1] == 10 && velha[2] == 10 && velha[3] == 10 && velha[4] == 10 && velha[5] == 10 && velha[6] == 10 && velha[7] == 10 && velha[8] == 10){
  console.log(`Partida terminou empatada!`)
  console.log();
  break;
}


for (const condicaodevitoria of condicoesdevitoria){
    const[a,b,c] = condicaodevitoria;

    if(jogodavelha[a] && jogodavelha[a]=== jogodavelha[b] && jogodavelha[a]=== jogodavelha[c]){
      vitoria = true;
      vencedor = jogada;
      break;
    }

}

}

if (vitoria){
  console.log(`O jogador venceu a partida`);
} else {
  console.log("A partida terminou empatada");
}


























