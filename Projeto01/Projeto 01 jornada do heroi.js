const prompt = require("prompt-sync")();
console.clear();

let pontuacao = 0;
console.log("A trilha do dev começa com a decisão de se inscrever na Blue e começar os estudos para se tornar um programador bem sucedido");
console.log();
console.log("Para você completar a sua jornada como dev você deve responder sinceramente as 5 seguintes perguntas com sim ou não");
console.log();
console.log("Para cada resposta positiva das perguntas acima você receberá 1 ponto na sua avaliação");
console.log ();
let p1 = prompt("Você foi aprovado no processo seletivo?");

let p2 = prompt("Você já reservou o um tempo pra estudo?");

let p3 = prompt("Você já viu as aulas iniciais?");

let p4 = prompt("Você está resolvendo listas de exercício?");

let p5 = prompt("Você está preparado para os desafios e dedicação necessários para chegar a excelência?");

if(p1 == "sim" ){
    pontuacao++
} 
    
if(p2 == "sim"){
    pontuacao++
}
    
if(p3 == "sim"){
    pontuacao++
}
    
if(p4 == "sim"){
    pontuacao++
}
    
if(p5 == "sim"){
    pontuacao++
}
    
console.log();

console.log("Sua pontuação final foi de", pontuacao);

console.log ();

if(pontuacao == 0){
    console.log ("Você falha miseravelmente, se continuar desse jeito jamais chegará no seu objetivo.");
}

    else if(pontuacao == 1 || pontuacao == 2){
    console.log ("Você deu o primeiro passo, mas precisa se esforçar mais para conseguir triunfar.");
}

    else if(pontuacao == 3){
    console.log ("Você está num bom caminho, mas tenho certeza que consegue fazer melhor. ");
}

    else if(pontuacao == 4){
    console.log ("Você tem se esforçado bastante é notório, mais um pouco e chegaremos lá.");
}

    else if(pontuacao == 5){
    console.log ("Você triunfa de maneira inquestionável seus códigos serão falados aos 4 cantos, chegou ao seu objetivo.");
}