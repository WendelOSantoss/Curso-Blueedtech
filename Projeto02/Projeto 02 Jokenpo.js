const prompt = require("prompt-sync")();
while(true){
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
    while (jogador != "pedra" && jogador!="papel" && jogador != "tesoura"){
        jogador= prompt("Você só pode escolher entre pedra, papel e tesoura, por favor digite corretamente");
    }
    let computador = escolha[Math.floor(Math.random()*escolha.length)]
    console.log (jogador)
    console.log (computador)
    if(jogador=="pedra" && computador=="pedra"){
        console.log ("Empate")
    }
    else if(jogador=="pedra" && computador=="tesoura"){
        console.log("Vitória do jogador")
        pontuacaojogador++
    } 
     else if(jogador=="pedra" && computador=="papel"){
        console.log("Vitória do computador")
        pontuacaocomputador++
    }
        if(jogador=="tesoura" && computador=="tesoura"){
        console.log ("Empate")
    }
        else if(jogador=="tesoura" && computador=="papel"){
        console.log("Vitória do jogador")
        pontuacaojogador++
    } 
        else if(jogador=="tesoura" && computador=="pedra"){
        console.log("Vitória do computador")
        pontuacaocomputador++
    }
            if(jogador=="papel" && computador=="papel"){
            console.log ("Empate")
        }
            else if(jogador=="papel" && computador=="pedra"){
            console.log("Vitória do jogador")
            pontuacaojogador++
        } 
            else if(jogador=="papel" && computador=="tesoura"){
            console.log("Vitória do computador")
            pontuacaocomputador++
        }          
    }
        console.log(`A pontuação do jogador foi de ${pontuacaojogador}`);
        console.log(`A pontuação do computador foi de ${pontuacaocomputador}`);

        if(pontuacaojogador>pontuacaocomputador){
            console.log(`O grande vencedor foi ${nome}, meus parabéns, suas habilidades são incríveis!`);
        }
            else if(pontuacaocomputador>pontuacaojogador){
                console.log(`O grande vencedor foi o computador, lamentável perder pra uma máquina ${nome}, tente outra vez`);
            }
                else(console.log("O resultado foi empate, vocês se mostraram adversários dignos"));
       
        let repetir =prompt("Grande partida! Você deseja jogar novamente? Responda com sim ou nao")
            while(repetir!= "sim" && repetir != "nao"){
                repetir=prompt("Apenas escolha entre sim ou nao");
            }
            if(repetir=="sim"){
                continue
            }
                else{
                    console.log("Tudo bem, te esperamos na próxima, valeu!");
                    console.clear();
                    break
                }
         }
                    





