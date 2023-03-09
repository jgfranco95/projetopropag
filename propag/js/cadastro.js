var cliques = 0;

function mudarTema(){
    cliques++;

    if(cliques==1){
        document.body.style.setProperty('--colorPrimaria', 'black');
        document.body.style.setProperty('--colorSecundaria', 'white');
        document.getElementById("icone").src = "sol.png"
    }
    else{
        cliques = 0;
        document.body.style.setProperty('--colorPrimaria', 'white');
        document.body.style.setProperty('--colorSecundaria', 'black');
        document.getElementById("icone").src = "img/lua.png"
    }
}
