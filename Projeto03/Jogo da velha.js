const prompt = require('prompt-sync')();
while(true){
console.clear();
console.log("Bem vindo ao jogo da velha!");
prompt("Aperte enter pra continuar");
console.log("As regras são simples, se você fizer uma sequencia de 3 simbolos iguais");
console.log();
console.log("na diagonal, horizontal ou vertical, você ganhará o jogo");
prompt("Podemos começar? Digite enter para continuar");

let velha = [0,1,2,3,4,5,6,7,8];
    let layoutjogodavelha = [[], [], []];
    layoutjogodavelha[2][2] = undefined;
    let ticTacToeLayout = '';
function updateLayout() {
  ticTacToeLayout = `${conjunto(layoutjogodavelha[0][0])} | ${conjunto(
      layoutjogodavelha[0][1],
  )} | ${conjunto(layoutjogodavelha[0][2])}
---------
${conjunto(layoutjogodavelha[1][0])} | ${conjunto(
      layoutjogodavelha[1][1],
  )} | ${conjunto(layoutjogodavelha[1][2])}
---------
${conjunto(layoutjogodavelha[2][0])} | ${conjunto(
      layoutjogodavelha[2][1],
  )} | ${conjunto(layoutjogodavelha[2][2])}`;
}

function conjunto(item) {
  return item === undefined ? ' ' : item;
}
conjunto();
updateLayout();
console.log();

let jogodavelha = Array(9).fill(undefined);
let vitoria = false;
let vencedor;
let jogador1 = prompt("Digite seu nome você jogará com o x: ");
let jogador2 = prompt("Digite seu nome você jogará com o O: ");
let jogada1 = "x"
let vitoriao=0;
let vitoriax=0; 
console.log();
let rodadas = prompt("Digite quantas rodadas deseja jogar: ");
console.log();
while(rodadas>0){
while(!vitoria){
console.log();
const coordenada = +prompt(` X Digite onde deseja marcar a sua jogada (0 e 8): `);
        velha[coordenada] = 10;
        console.log();
        if (coordenada == '0' && layoutjogodavelha[0][0] == undefined) {
            (layoutjogodavelha[0][0] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '1' && layoutjogodavelha[0][1] == undefined) {
            (layoutjogodavelha[0][1] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '2' && layoutjogodavelha[0][2] == undefined) {
            (layoutjogodavelha[0][2] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '3' && layoutjogodavelha[1][0] == undefined) {
            (layoutjogodavelha[1][0] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '4' && layoutjogodavelha[1][1] == undefined) {
            (layoutjogodavelha[1][1] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '5' && layoutjogodavelha[1][2] == undefined) {
            (layoutjogodavelha[1][2] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '6' && layoutjogodavelha[2][0] == undefined) {
            (layoutjogodavelha[2][0] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '7' && layoutjogodavelha[2][1] == undefined) {
            (layoutjogodavelha[2][1] = jogada1), conjunto();
            updateLayout();
            console.log(ticTacToeLayout);
        } else if (coordenada == '8' && layoutjogodavelha[2][2] == undefined) {
            (layoutjogodavelha[2][2] = jogada1), conjunto();
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

jogodavelha[coordenada]= jogada1;

jogada1 = jogada1 ==="x"? "o" : "x"; 

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
      vencedor = jogada1;
      break;
    }
}

}

if (vencedor==="o"){
  console.log();
  console.log(`O vencedor da rodada é o  jogador com a opção x`);
  vitoriao++
} else if(vencedor === "x"){
  console.log();
  console.log(`O vencedor da rodada é o jogador com a opção O`);
  vitoriax++
}
else {
  console.log("A rodada terminou empatada");
}

  layoutjogodavelha = [[], [], []]
  jogodavelha = Array(9).fill(undefined);
  jogada1 = "x"

vitoria = false
rodadas--
}
if(vitoriao>vitoriax){
  console.log();
  console.log(`Parabéns ${jogador1} você foi o grande vencedor com ${vitoriao} pontos`);
}else if (vitoriax>vitoriao){
  console.log();
  console.log(`Parabéns ${jogador2} você foi o grande vencedor com ${vitoriax} pontos`);
}else{
  console.log();
  console.log("A partida terminou empatada");
}
console.log();
let jogarnovamente = prompt(`Jogo finalizado. Deseja jogar novamente? `);
while(jogarnovamente!= "sim"&&jogarnovamente!="nao"){
  jogarnovamente=prompt("Digite apenas sim ou nao por favor.");
}
    if (jogarnovamente == `sim`) {
        continue;
    } else if (jogarnovamente == `nao`){
        console.log();
        console.log(`Muito obrigado por ter jogado, até a próxima!`);
        break;
    }
}





















