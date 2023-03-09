var cliques = 0;

function mudarTema(){
    cliques++;

    if(cliques==1){
        document.body.style.setProperty('--colorPrimaria', 'black');
        document.body.style.setProperty('--colorSecundaria', 'white');
        document.getElementById("sol_lua").src = "img/lua.webp"; 
        document.getElementById("icone").src = "img/sol.png"
    }
    else{
        cliques = 0;
        document.body.style.setProperty('--colorPrimaria', 'white');
        document.body.style.setProperty('--colorSecundaria', 'black');
        document.getElementById("sol_lua").src = "img/4de065cb018cb642a83857e147e85f7e.png";
        document.getElementById("icone").src = "img/lua.png"
    }
}
