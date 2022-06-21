const prompt = require('prompt-sync')();
console.clear();

// Fazer código com passagem de horas, dando 24hrs pro personagem resgatar a princesa

console.log("Olá Mikonos, você acordou após tirarem dos seus braços sua amada princesa, ela foi aprisionada numa torre pelo temido Bowser, aqui começa sua jornada para resgatá-la, preparado?");
prompt("Aperte Enter para continuar");
console.log("Este será um jogo interativo, cada decisão que tomar será essencial para chegar ou não ao seu objetivo, tome sábias decisões,você tem o tempo de 24 horas no jogo para salva-la, vamos lá?");
prompt("Aperte Enter para continuar");
let heroi = {
    nome:"Mikonos",
    tempo: 24,
    alertasoldados: 0,
    saude: 50,
    armas:['Espada','Escudo'],
    tempomudanca: function (quantotempo) {
        this.tempo -=quantotempo
        console.log(`Tempo: ${this.tempo} horas`);
    },
    saudemudanca: function (quantovida) {
        this.saude -= quantovida;
        console.log(`Saude: ${this.saude}`);
    },
    alertasoldadosmudanca: function (alertasoldados) {
        this.alertasoldados += alertasoldados;
        console.log(`Alerta soldados: ${this.alertasoldados}`);
    },   
}
console.log(`Tempo: ${heroi.tempo}`);
console.log(`Saúde: ${heroi.saude}`);
console.log(`Nivel de Alerta dos Soldados: ${heroi.alertasoldados}`);


while(true){

console.log("Você acorda numa vila pacata sem saber ao certo o que aconteceu. A filha do padeiro, que cuidou de seus ferimentos,diz a você que um cavaleiro o encontrou ferido na estrada e o trouxe para receber cuidados.");
prompt("Aperte Enter para continuar");
console.log("Num lapso de memória você se recorda da batalha travada para defender a sua amada contra os capangas de bowser, e vai até o local em busca de pistas");
console.log(`Chegando no local você se depara com um rastro de sangue adentrando a floresta, e indo em direção uma estrada vê algumas pegadas. Qual pista deseja seguir? 
1.Rastro de sangue 
2.Pegadas`);

let escolha1 = +prompt("Escolha entre opção 1 ou 2 ");
while(escolha1 != "1" && escolha1 != "2"){
    escolha1 = +prompt("Escolha entre opção 1 ou 2 ");
}

if (escolha1 == "1"){
    heroi.tempomudanca(1);
    console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
    console.log(`Saúde: ${heroi.saude}`);
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
        heroi.tempomudanca(12);
        console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
        console.log(`Saúde: ${heroi.saude}`);
        console.log(`Você consegue adentrar o posto avançado com certa facilidade, e segue rumo ao escritório de um capitão dos capangas de bowser.`);
        prompt ("Aperte Enter pra continuar");
        console.log(`Depois de muita procura consegue encontrar uma carta que indica onde a princesa está sendo aprisionada. Já está amanhecendo e você precisa fazer uma escolha.
        1.Sair mesmo com o dia claro em sentido à torre onde está sendo mantida a princesa, correndo o risco de ser visto.
        2.Optar por esperar anoitecer e poder sair do posto avançado com maior segurança. Porém perdendo um bom tempo no processo.`);
        
        let escolha3 = +prompt("Escolha entre opção 1 ou 2 ");
        while(escolha3 != "1" && escolha3 != "2"){
        escolha3 = +prompt("Escolha entre opção 1 ou 2 ");
        }
        if (escolha3=="1"){
            heroi.tempomudanca(2);
            heroi.alertasoldadosmudanca(2);
            console.log(`Saúde: ${heroi.saude}`);
            console.log(`Quando está prestes a sair da base você é visto por um guarda e precisa tomar uma difícil decisão
            1.Continuar fugindo, já que você possui a informação que tanto procurava, não se importando com o guarda
            2.Enfrentar o guarda para que ele não alerte os companheiros`);
            let escolha4 = +prompt("Escolha entre opção 1 ou 2 ")
            while(escolha4 != "1" && escolha4 != "2"){
            escolha4 = +prompt("Escolha entre opção 1 ou 2 ")
            }
            if (escolha4 == "1"){
                heroi.tempomudanca(5);
                heroi.alertasoldadosmudanca(8);
                console.log(`Saúde: ${heroi.saude}`);
                console.log("Depois de uma longa jornada você chegou à torre onde tudo indica estar a princesa.")
            }
            else if (escolha4 == "2"){
                heroi.tempomudanca(5);
                heroi.alertasoldadosmudanca(8);
                heroi.saudemudanca(20);
                console.log(`Você trava uma intensa batalha com o guarda, porém por se tratar de um soldado iniciante você consegue abate-lo facilmente usando sua espada. E segue rumo à torre onde está a princesa.`);
            }

            
            
        }

        if (escolha3=="2"){
            heroi.tempomudanca(12);
            console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
            console.log(`Saúde: ${heroi.saude}`);
            console.log(`Anoiteceu, você consegue sair do posto avançado sem maiores problemas, e segue rumo à torre onde está a princesa.`);
        }
    }

    else if (escolha2 == "2"){
        heroi.tempomudanca(2);
        heroi.alertasoldadosmudanca(4);
        console.log(`Saúde: ${heroi.saude}`);
        console.log();
        console.log(`Você consegue adentrar o posto avançado porém é visto
         por um guarda e precisa tomar uma difícil decisão.
        1. Fugir e voltar ao posto em outro momento em busca de pistas.
        2. Enfrentar o guarda antes que seja possível ele alertar os companheiros.`);
        let escolha5 = +prompt("Escolha entre opção 1 ou 2 ");
            while(escolha5 != "1" && escolha5 != "2"){
            escolha5 = +prompt("Escolha entre opção 1 ou 2 ");
            }
        if (escolha5 == "1"){
            heroi.tempomudanca(12);
            heroi.alertasoldadosmudanca(2);
            console.log(`Saúde: ${heroi.saude}`);
            console.log();
            console.log(`Você volta para a casa da filha do padeiro e aguarda a poeira abaixar para voltar ao posto avançado durante a noite.`);
            prompt(`Aperte Enter para continuar`);
            console.log(`Anoiteceu, você retorna ao posto avançado, você percebe um reforço de soldados devido à sua visita mais cedo ao posto avançado, precisa decidir:
            1. Adentrar mesmo com os reforços de guarda, tentando ao máximo não ser visto.
            2. Esperar mais um pouco para ver se os guardas vão se dispersar.`);
            let escolha6 = +prompt("Escolha entre opção 1 ou 2 ");
            while(escolha6 != "1" && escolha6 != "2"){
            escolha6 = +prompt("Escolha entre opção 1 ou 2 ");
            }
            if(escolha6=="1"){
                heroi.tempomudanca(2);
                heroi.alertasoldadosmudanca(5);
                console.log(`Saúde: ${heroi.saude}`);
                console.log();
                console.log(`Você adentra o posto avançado, porém ao chegar no escritório do capitão dos capangas percebe dois guardas parados em frente a porta`);
                console.log(`Você consegue derrubar os dois guardas, entra na sala do capitão, e após muito vasculhar encontra as pistas de onde esta a princesa e parte em rumo à torre que a guardam.`);
            }
            else if(escolha6 == "2"){
                heroi.tempomudanca(12);
                console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
                console.log(`Saúde: ${heroi.saude}`);
                console.log();
                console.log(`Sua espera dá resultado e percebe que os guardas se dispersaram, consegue chegar à sala do capitão dos capangas e começa a vasculhar em busca de pistas`);
                prompt("Aperte Enter para continuar");
                console.log(`Depois de um bom tempo vasculhando, você finalmente encontra uma pista de onde a princesa está presa e sai em rumo ao seu resgate`);
            }
        
            }
        else if (escolha5 = "2"){
            heroi.tempomudanca(4);
            heroi.alertasoldadosmudanca(4);
            heroi.saudemudanca(20);
            console.log(`Você trava uma intensa batalha com o guarda, porém por se tratar de um soldado iniciante você consegue abate-lo facilmente usando sua espada. E segue rumo ao escritório de um dos capitães dos capangas de bowser.`);
            prompt ("Aperte Enter pra continuar");
            console.log(`Depois de vasculhar todo o local você encontra uma carta que indica a localização da princesa. Por ter entrado durante o dia você sai a noite do posto avançado com a informação do esconderijo da princesa em mãos, e parte rumo à torre onde estão aprisionando-a.`);

        }
    }
}


if (escolha1 == "2"){
    heroi.tempomudanca(2);
    console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
    console.log(`Saúde: ${heroi.saude}`);
    console.log();
    console.log(`Seguindo as pegadas você consegue ver de longe dois soldados acampando e precisa se decidir:
    1. Ir conversar em busca de informações
    2. Ataca-los furtivamente`);

    let escolha7 = +prompt("Escolha entre opção 1 ou 2 ");
    while(escolha7 != "1" && escolha7 != "2"){
        escolha7 = +prompt("Escolha entre opção 1 ou 2 ");
    }   
    if(escolha7 == "1"){
        heroi.tempomudanca(2);
        heroi.alertasoldadosmudanca(4);
        heroi.saudemudanca(30);
        console.log (`Os capangas de bowser o reconhecem e te atacam fazendo você receber bastante dano, porém ainda está de pé é necessário tomar uma decisão:
        1.Continuar lutando e tentar derrotar os dois soldados
        2.Tentar fugir`)

        let escolha8 = +prompt("Escolha entre opção 1 ou 2 ");
        while(escolha8 != "1" && escolha8 != "2"){
        escolha8 = +prompt("Escolha entre opção 1 ou 2 ");
        }
        
        if(escolha8 == "1"){
            heroi.tempomudanca(4);
            heroi.alertasoldados(10);
            heroi.saudemudanca(20);
        console.log (`Você não resiste aos ferimentos e foi derrotado pelos dois soldados, sua saga termina aqui.`);
            // break
         }
        else if (escolha8 == "2"){
            heroi.tempomudanca(12);
            heroi.alertasoldadosmudanca(4);
            console.log(`Saúde: ${heroi.saude}`);
            console.log();
        console.log (`Você consegue fugir de volta à filha do padeiro que trata dos seus ferimentos, porém isso custa horas preciosas da jornada.`);
        prompt("Aperte enter para continuar");
        console.log(`Apesar de não estar totalmente recuperado, você se sente apto a continuar sua jornada, e se dirige até o local da última batalha. Ao chegar você deve novamente tomar a decisão:
        1.Seguir as pegadas
        2.Seguir o rastro de sangue`);
        let escolha9 = +prompt("Escolha entre opção 1 ou 2 ");
        while(escolha9 != "1" && escolha9 != "2"){
        escolha9 = +prompt("Escolha entre opção 1 ou 2 ");
        }
        if(escolha9 =="1"){
            heroi.tempomudanca(4);
            console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
            heroi.saudemudanca(-10);
            console.log(`Você segue as pegadas imaginando encontrar os soldados novamente, porém ao chegar você ve que não tem mais ninguém, foi apenas uma perda de tempo.`);
            prompt("Aperte Enter para continuar");
            console.log('Infelizmente você falhou na sua missão, sua jornada termina aqui.');
            // break
               
        }   

        else if( escolha9 =="2"){
            heroi.tempomudanca(2);
            console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
            console.log(`Saúde: ${heroi.saude}`);
            console.log();
                console.log(`Ao seguir o rastro de sangue você encontra um corpo e começa a vasculha-lo, lá indica um posto avançado dos capangas de bowser. Finalmente uma pista válida.`);
                prompt("Pressione Enter para continuar");
                console.log(`Ao chegar no posto avançado você se vê com duas opções:
                1. Esperar anoitecer para entrar mais facilmente, correndo o risco de perder tempo precioso
                2. Entrar durante o dia esgueirando-se do modo mais furtivo possível, mas com maior risco de ser visto`);
                let escolha10 = +prompt("Escolha entre opção 1 ou 2 ");
                while(escolha10 != "1" && escolha10 != "2"){
                    escolha10 = +prompt("Escolha entre opção 1 ou 2 ");
                }
            
                if (escolha10 == "1"){
                    heroi.tempomudanca(8);
                    console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
                    console.log(`Saúde: ${heroi.saude}`);
                    console.log();
                    console.log(`Você consegue adentrar o posto avançado com certa facilidade, e segue rumo ao escritório de um capitão dos capangas de bowser.`);
                    prompt ("Aperte Enter pra continuar");
                    console.log(`Depois de muita procura consegue encontrar uma carta que indica onde a princesa está sendo aprisionada. Já está amanhecendo e você precisa fazer uma escolha.
                    1.Sair mesmo com o dia claro em sentido à torre onde está sendo mantida a princesa, correndo o risco de ser visto.
                    2.Optar por esperar anoitecer e poder sair do posto avançado com maior segurança. Porém perdendo um bom tempo no processo.`);
                    
                    let escolha11 = +prompt("Escolha entre opção 1 ou 2 ");
                    while(escolha11 != "1" && escolha11 != "2"){
                    escolha12 = +prompt("Escolha entre opção 1 ou 2 ");
                    }
                    if (escolha11=="1"){
                        heroi.tempomudanca(2);
                        heroi.alertasoldadosmudanca(5);
                        console.log(`Saúde: ${heroi.saude}`);
                        console.log();
                        console.log(`Quando está prestes a sair da base você é visto por um guarda e precisa tomar uma difícil decisão
                        1.Continuar fugindo, já que você possui a informação que tanto procurava, não se importando com o guarda
                        2.Enfrentar o guarda para que ele não alerte os companheiros`);
                        let escolha12 = +prompt("Escolha entre opção 1 ou 2 ");
                        while(escolha12 != "1" && escolha12 != "2"){
                        escolha12 = +prompt("Escolha entre opção 1 ou 2 ");
                        if (escolha12 = "1"){
                            heroi.tempomudanca(4);
                            heroi.alertasoldadosmudanca(6);
                            console.log(`Saúde: ${heroi.saude}`);
                            console.log();
                            console.log("Depois de uma longa jornada você chegou à torre onde tudo indica estar a princesa.")
                        }
                        else if (escolha12 = "2"){
                            heroi.tempomudanca(5);
                            console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
                            heroi.saudemudanca(30);
                            console.log(`Você trava uma intensa batalha com o guarda, porém por se tratar de um soldado iniciante você consegue abate-lo facilmente usando sua espada. E segue rumo à torre onde está a princesa.`);
                        }
            
                        }
                        
                        
                    }
                
            
                    else if (escolha11=="2"){
                        heroi.tempomudanca(12);
                        console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
                        console.log(`Saúde: ${heroi.saude}`);
                        console.log();
                        console.log(`Anoiteceu, você consegue sair do posto avançado sem maiores problemas, e segue rumo à torre onde está a princesa.`);
                    }
                }
            }

        }
        
        }

        else if(escolha7=="2"){
            heroi.tempomudanca(6);
            console.log(`Alerta dos Soldados: ${heroi.alertasoldados}`);
            heroi.saudemudanca(40);
            console.log(`Você os ataca furtivamente e consegue eliminar um dos soldados facilmente, porém o segundo soldado percebe a sua presença e uma batalha se inicia`);
            prompt("Pressione Enter para continuar");
            console.log(`Usando sua ${heroi.armas[0]} e seu ${heroi.armas[1]} após tomar muito dano, num golpe de misericórdia consegue superar seu adversário.`);
            prompt("Pressione Enter para continuar");
            console.log(`Após analisar o acampamento, você percebe um baú junto aos soldados e resolve vasculha-lo. Nele tem um caderno com todas as informações da missão de raptar a princesa, inclusive o local para qual ela foi levada.`);
            prompt("Pressione Enter para continuar");
            console.log(`Você segue rumo à torre, para resgata-la o mais rápido possível`) ;  
        }

    }



    console.log();
    if(heroi.tempo<=0 && heroi.saude<=10 && heroi.alertasoldados >=10 ){
        console.log("Depois de tantas aventuras, você finalmente chega ao castelo onde está sua amada, mas percebe que chegou tarde demais, e está sangrando muito o que depois de tanto esforço, além disso alertou vários soldados que estavam a sua espera,você entra em combate com eles e morre. Você falhou em resgata-la das garras do temido bowser, morreu e sua jornada termina aqui.");
        
    }

    console.log();
    if(heroi.tempo<=0 && heroi.saude<=10){
        console.log("Depois de tantas aventuras, você finalmente chega ao castelo onde está sua amada, mas percebe que chegou tarde demais, e está sangrando muito o que depois de tanto esforço te leva a morte. Você falhou em resgata-la das garras do temido bowser, morreu e sua jornada termina aqui.");
        
    }

    if(heroi.tempo<=0 && heroi.saude>=10 && heroi.alertasoldados <=10){
        console.log("Depois de tantas aventuras, você finalmente chega ao castelo onde está sua amada, mas percebe que chegou tarde demais. Você falhou em resgata-la das garras do temido bowser, morreu e sua jornada termina aqui.");
        
    }



    console.log();
    if(heroi.tempo>0 && heroi.saude<=10 && heroi.alertasoldados<10){
        console.log(`Você consegue chegar à torre e avista a princesa junto a bowser e parte para resgata-la. Porém você está muito machucado, bowser te domina facilmente o deixando para morrer enquanto foge com a princesa, sua jornada termina aqui, você falhou.`);
        
    }

    console.log();
    if(heroi.tempo>0 && heroi.saude>10 && heroi.alertasoldados<10){
        console.log(`Você consegue chegar à torre e avista a princesa junto a bowser e parte para resgata-la. Com sua ${heroi.armas[0]} e seu ${heroi.armas[1]} você com toda sua determinação encara bowser, o derrota e consegue resgatar sua amada princesa, meus parabéns você concluiu sua missão!`);
        
    }

    console.log();
    if(heroi.tempo>0 && heroi.saude>=10 && heroi.alertasoldados>=10){
        console.log(`Você consegue chegar à torre e avista a princesa junto a bowser e parte para resgata-la, porém durante sua jornada alertou muitos soldados que estavam a sua espera. Com sua ${heroi.armas[0]} e seu ${heroi.armas[1]} você com toda sua determinação encara bowser e os soldados, porém eles estavam em maior número, você não consegue resgatar a sua amada princesa e morre. Sua jornada termina aqui.`);
        
    }


    let jogarnovamente = +prompt(`Que aventura foi essa! Independentemente do resultado foi um prazer jogar com você, inclusive tenho uma pergunta.
1.Quero jogar novamente: Digite 1
2.Não desejo jogar novamente: Digite 2`);
while(jogarnovamente != "1" && jogarnovamente != "2"){
    jogarnovamente = +prompt("Escolha entre opção 1 ou 2");
}
if(jogarnovamente == "1"){
    continue
}
else if (jogarnovamente == "2"){
    console.log("Foi um prazer jogar contigo, até uma próxima!");
    break
}


}
