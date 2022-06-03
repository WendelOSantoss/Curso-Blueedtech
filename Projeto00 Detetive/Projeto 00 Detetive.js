const prompt = require("prompt-sync")();
console.clear();
let pontuacao = 0;
let cidade=prompt("Insira o nome de uma cidade fictícia");
let personagem =prompt("Insira o nome do seu personagem");
console.log(`Numa noite fria em ${cidade}, o(a) detetive ${personagem} investiga um assassinato por arma de fogo e indícios de luta corporal, e chega até o seu principal suspeito.`);
prompt("Aperte enter para continuar");
console.log("Você tem direito a 5 perguntas para identificar se o seu suspeito é culpado, inconclusivo(suspeito) ou inocente.");
prompt("Aperte enter para continuar");
let p1 = prompt("Você possuia alguma desavença com a vítima?");
let p2 = prompt("Você tinha posse de alguma arma de fogo?");
let p3 = prompt("Você possui hematomas e arranhões no corpo?");
let p4 = prompt("Foram encontradas malas prontas na sua casa, você estava tentando fugir?");
let p5 = prompt("Você estava na rua do crime no horário do assassinato?");

if(p1==="sim"){
pontuacao++
}    
if(p2==="sim"){
pontuacao++
}     
if(p3==="sim"){
pontuacao++    
}           
if(p4==="sim"){
pontuacao++    
}               
if(p5==="sim"){
pontuacao++    
}           



if(pontuacao<=2){
    console.log("Você é inocente, as malas eram apenas pra uma viagem marcada");
}
    else if(pontuacao==3){
    console.log("Você é suspeito, terá sua prisão preventiva efetuada, ainda não está liberado"); 
}
    else if(pontuacao>3){
    console.log("Você é culpado, está detido pelo assassinato da vitíma e será julgado logo em breve");
}


console.log(`Chega ao fim mais uma investigação do(a) detetive ${personagem}, todas as respostas foram encontradas, parabéns`);

prompt("Aperte enter para encerrar");
console.clear();







