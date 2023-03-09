// Scrow View SOBRE

const scroll_view_sobre = document.querySelector('.sobre')

window.addEventListener('scroll', function(){
    if(window.scrollY >= 50){
        scroll_view_sobre.classList.add('show')
    } else{
        scroll_view_sobre.classList.remove('show')
    }
})



























/* 
window.alert("Aqui está uma página sobre mim!"); // Alert usado para dar bem-vindo á página
var nome = window.prompt("Qual seu nome?"); // Prompt usado para perguntar qual é o nome do viewer

document.querySelector('.agradecimentos-p').innerHTML = `Agradeço por ver minha página<b> ${nome}</b>!`; // comando usado para puxar variável com o nome do viewer e colocar no documento html

// Scroll View Idade

const scroll_view_idade = document.querySelector('.scroll-view-idade')  // const é uma variável que não muda, foi usada para criar a animação de scroll da div idade

window.addEventListener('scroll', function(){  //add um eventListener, que observa quando a pág é rolada para baixo, então ativa uma função que enxerga se a página foi rolada até um ponto, se sim adiciona uma classe que faz a div executar uma animação predefinida no css
    if(window.scrollY >= 50){
        scroll_view_idade.classList.add('show')
    } else{
        scroll_view_idade.classList.remove('show')
    }
})

// Scroll View Gostos

const scroll_view_gostos = document.querySelector('.scroll-view-gostos') // const é uma variável que não muda, foi usada para criar a animação de scroll da div gostos

window.addEventListener('scroll', function(){ //add um eventListener, que observa quando a pág é rolada para baixo, então ativa uma função que enxerga se a página foi rolada até um ponto, se sim adiciona uma classe que faz a div executar uma animação predefinida no css
    if(window.scrollY >= 350){
        scroll_view_gostos.classList.add('show')
    } else{
        scroll_view_gostos.classList.remove('show')
    }
})

// Scroll View Agradecimentos

const scroll_view_agradecimentos = document.querySelector('.scroll-view-agradecimentos') // const é uma variável que não muda, foi usada para criar a animação de scroll da div agradecimentos

window.addEventListener('scroll', function(){ //add um eventListener, que observa quando a pág é rolada para baixo, então ativa uma função que enxerga se a página foi rolada até um ponto, se sim adiciona uma classe que faz a div executar uma animação predefinida no css
    if(window.scrollY >= 850){
        scroll_view_agradecimentos.classList.add('show')
    } else{
        scroll_view_agradecimentos.classList.remove('show')
    }
})


// Scroll View Footer

const scroll_view_footer = document.querySelector('.scroll-view-footer') // const é uma variável que não muda, foi usada para criar a animação de scroll da div footer

window.addEventListener('scroll', function(){ //add um eventListener, que observa quando a pág é rolada para baixo, então ativa uma função que enxerga se a página foi rolada até um ponto, se sim adiciona uma classe que faz a div executar uma animação predefinida no css
    if(this.window.scrollY >= 850){
        scroll_view_footer.classList.add('show')
    }else{
        scroll_view_footer.classList.remove('show')
    }
}) */