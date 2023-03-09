var procura = 0;
var verifica = 0;
var menu = document.getElementById("menu");
var logo = document.getElementById("logo")
var imagens = ["img/bgs.jpg", "img/bgs1.jpg", "img/bgs2.jpg", "img/bgs3.jpg"];
var textos = ["IMAGEM1", "IMAGEM2", "IMAGEM3", "IMAGEM4", "IMAGEM5"]
var botaoUM = document.getElementById("img1");
var botaoDOIS = document.getElementById("img2");
var botaoTRES = document.getElementById("img3");
var botaoQUATRO = document.getElementById("img4");
var funcoes = [botao1, botao2, botao3, botao4];
botaoUM.style.backgroundColor = 'white';

function botao1(){
    procura = 0;
    document.getElementById("img").src = imagens[procura]; 
    botaoUM.style.backgroundColor = 'white';
    botaoDOIS.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoTRES.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoQUATRO.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}

function botao2(){
    procura = 1;
    document.getElementById("img").src = imagens[procura];
    botaoUM.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoDOIS.style.backgroundColor = 'white';
    botaoTRES.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoQUATRO.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}

function botao3(){
    procura = 2;
    document.getElementById("img").src = imagens[procura];
    botaoUM.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoDOIS.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoTRES.style.backgroundColor = 'white';
    botaoQUATRO.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}

function botao4(){
    procura = 3;
    document.getElementById("img").src = imagens[procura];
    botaoUM.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoDOIS.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoTRES.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    botaoQUATRO.style.backgroundColor = 'white';
}

function escolherProximo(){
    if(procura==3){
        procura = 0;
    }
    else{
        procura++;
    }
    funcoes[procura]();
}

var timer = setInterval(escolherProximo, 7000);

function aparecer(){

    if(verifica==0){
        menu.style.display = 'flex';
        verifica++;
    }
    else{
        menu.style.display = 'none';
        verifica--;
    }
}



// CARROSSEL
