const prompt = require('prompt-sync')();
console.clear();

// Fazer código com passagem de horas, dando 24hrs pro personagem resgatar a princesa

console.log("Olá Mikonos, você acordou após tirarem dos seus braços sua amada princesa, ela foi aprisionada numa torre pelo temido Bowser, aqui começa sua jornada para resgatá-la, preparado?");
prompt("Aperte Enter para continuar");
console.log("Este será um jogo interativo, cada decisão que tomar será essencial para chegar ou não ao seu objetivo, tome sábias decisões, vamos lá?");
prompt("Aperte Enter para continuar");
let heroi = {
    nome:"Mikonos",
    sono:50,
    fome:50,
    saude:50,
    armas:['Espada', 'Arco e fecha', 'Escudo'],
    comer: function () {
        this.fome = false;
        this.mantimentos--;
    },
}
let dias = 0;
let princesarecuperada=false;

console.log("Você acorda numa vila pacata sem saber ao certo o que aconteceu. A filha do padeiro, que cuidou de seus ferimentos,diz a você que um cavaleiro o encontrou ferido na estrada e o trouxe para receber cuidados.");
prompt("Aperte Enter para continuar");
console.log("Num lapso de memória você se recorda da batalha travada para defender a sua amada contra os capangas de bowser, e vai até o local em busca de pistas");
console.log(`Chegando no local você se depara com um rastro de sangue adentrando a floresta, e indo em direção uma estrada vê algumas pegadas. Qual pista deseja seguir? 
1.Rastro de sangue 
2.Pegadas`);

let escolha1 = +prompt("Escolha entre opção 1 ou 2");
while(escolha1 != "1" && escolha1 != "2"){
    escolha1 = +prompt("Escolha entre opção 1 ou 2");
}

if (escolha1 == "1"){

    console.log(`Seguindo o rastro de sangue você encontra o corpo de um dos capangas e começa a vasculhar em busca de pistas. Encontra um mapa que indica um posto avançado dos capangas e decide ir até lá`);
    prompt("Aperte Enter para continuar");
    console.log(`Ao chegar no posto avançado você se vê com duas opções:
    1. Esperar anoitecer para entrar mais facilmente, correndo o risco de perder tempo precioso
    2. Entrar durante o dia esgueirando-se do modo mais furtivo possível, mas com maior risco de ser visto`);
    let escolha2 = +prompt("Escolha entre opção 1 ou 2");
    while(escolha2 != "1" && escolha2 != "2"){
        escolha2 = +prompt("Escolha entre opção 1 ou 2");
    }

    if (escolha2 == "1"){
        console.log(`Você consegue adentrar o posto avançado com certa facilidade, e segue rumo ao escritório de um capitão dos capangas de bowser.`);
        prompt ("Aperte Enter pra continuar");
        console.log(`Depois de muita procura consegue encontrar uma carta que indica onde a princesa está sendo aprisionada. Já está amanhecendo e você precisa fazer uma escolha.
        1.Sair mesmo com o dia claro em sentido à torre onde está sendo mantida a princesa, correndo o risco de ser visto.
        2.Optar por esperar anoitecer e poder sair do posto avançado com maior segurança. Porém perdendo um bom tempo no processo.`);
        
        let escolha3 = +prompt("Escolha entre opção 1 ou 2");
        while(escolha3 != "1" && escolha3 != "2"){
        escolha3 = +prompt("Escolha entre opção 1 ou 2");
        }
        if (escolha3=="1"){
            console.log(`Quando está prestes a sair da base você é visto por um guarda e precisa tomar uma difícil decisão
            1.Continuar fugindo, já que você possui a informação que tanto procurava, não se importando com o guarda
            2.Enfrentar o guarda para que ele não alerte os companheiros`);
            let escolha4 = +prompt("Escolha entre opção 1 ou 2");
            while(escolha4 != "1" && escolha4 != "2"){
            escolha4 = +prompt("Escolha entre opção 1 ou 2");
            if (escolha4 = "1"){
                console.log("Depois de uma longa jornada você chegou à torre onde tudo indica estar a princesa. Porém por ter ignorado o guarda encontra vários soldados alertados por ele que estavam à sua espera e acaba morto encerrando sua jornada sem conseguir salvar sua amada princesa.")
            }
            else if (escolha4 = "2"){
                console.log(`Você trava uma intensa batalha com o guarda, porém por se tratar de um soldado iniciante você consegue abate-lo facilmente usando sua espada. E segue rumo à torre onde está a princesa.`);
            }

            }
            
        }

        if (escolha3=="2"){
            console.log(`Anoiteceu, você consegue sair do posto avançado sem maiores problemas, e segue rumo à torre onde está a princesa.`);
        }
    }

    else if (escolha2 == "2"){
        console.log(`Você consegue adentrar o posto avançado porém é visto por um guarda e precisa tomar uma difícil decisão.
        1. Fugir e voltar ao posto em outro momento em busca de pistas.
        2. Enfrentar o guarda antes que seja possível ele alertar os companheiros.`);
        let escolha5 = +prompt("Escolha entre opção 1 ou 2");
            while(escolha5 != "1" && escolha5 != "2"){
            escolha5 = +prompt("Escolha entre opção 1 ou 2");
            }
        if (escolha5 = "1"){
            console.log(`Você volta para a casa da filha do padeiro e aguarda a poeira abaixar para voltar ao posto avançado durante a noite.`);
        }
        if (escolha5 = "2"){
            console.log(`Você trava uma intensa batalha com o guarda, porém por se tratar de um soldado iniciante você consegue abate-lo facilmente usando sua espada. E segue rumo ao escritório de um dos capitães dos capangas de bowser.`);
            prompt ("Aperte Enter pra continuar");
            console.log(`Depois de vasculhar todo o local você encontra uma carta que indica a localização da princesa.`);

        }
    }
}
if (escolha1 == "2"){

    console.log(`Seguindo as pegadas você consegue ver de longe dois soldados acampando e precisa se decidir:
    1. Ir conversar em busca de informações
    2. Ataca-los furtivamente`);

    let escolha3 = +prompt("Escolha entre opção 1 ou 2");
    while(escolha1 != "1" && escolha1 != "2"){
        escolha3 = +prompt("Escolha entre opção 1 ou 2");
    }   
    if(escolha3 == "1"){
        console.log (`Os campangas de bowser o reconhecem e te atacam fazendo você receber bastante dano, porém ainda está de pé é necessário tomar uma decisão:
        1.Continuar lutando e tentar derrotar os dois soldados
        2.Tentar fugir`)

        let escolha4 = +prompt("Escolha entre opção 1 ou 2");
    while(escolha1 != "1" && escolha1 != "2"){
        escolha4 = +prompt("Escolha entre opção 1 ou 2");
        }
        
    if(escolha4 == "1"){
        console.log ("Você foi derrotado pelos dois soldados, sua saga termina aqui.");
    }
    else if (escolha4 == "2"){
        console.log ("Você consegue fugir de volta à filha do padeiro que trata dos seus ferimentos, porém isso custa horas preciosas da jornada.");
        prompt("Aperte enter para continuar");
    }

    }
    
}
