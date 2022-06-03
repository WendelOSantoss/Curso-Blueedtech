const prompt = require("prompt-sync")();
console.clear();

let nome = prompt("Qual o seu nome?");
console.log(`Olá ${nome},hoje iremos jogar jokenpo,conhecido também como pedra papel e tesoura`);
console.log("As regras são simples. Papel ganha de Pedra e perde pra tesoura");
console.log("Por sua vez Tesoura ganha de papel e perde pra Pedra");
console.log("Por fim, Pedra ganha de Tesoura e perde pra Papel");
console.log("No desafio de hoje você enfrentará o computador, preparado?");
prompt("Aperte enter para continuar");
let rodadas = prompt("Quantas rodadas deseja jogar?");
let escolha = ["pedra","papel","tesoura"];
let pontuacaojogador= 0;
let pontuacaocomputador = 0;
for(i=0;i<rodadas;i++){
    let jogador = prompt("Escolha entre pedra, papel e tesoura")
    let computador = escolha[Math.floor(Math.random()*escolha.length)]
    console.log (jogador)
    console.log (computador)
    if(jogador==pedra && computador==pedra){
        console.log ("Empate")
    }
    else if(jogador==pedra && computador==tesoura){
        console.log("Vitória do jogador")
        pontuacaojogador++
    } 
     else if(jogador==pedra && computador==papel){
        console.log("Vitória do computador")
        pontuacaocomputador++
    }
        if(jogador==tesoura && computador==tesoura){
        console.log ("Empate")
    }
        else if(jogador==tesoura && computador==papel){
        console.log("Vitória do jogador")
        pontuacaojogador++
    } 
        else if(jogador==tesoura && computador==pedra){
        console.log("Vitória do computador")
        pontuacaocomputador++
        }
    }























































