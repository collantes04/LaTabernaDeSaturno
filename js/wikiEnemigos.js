
function getId(elemento){
    return elemento.id;
}

document.addEventListener('DOMContentLoaded', function(){

    const botones = document.querySelectorAll('input[type="button"]');

    botones.forEach(function(boton){
        boton.addEventListener('click', function(){
            let id = getId(boton);
            
        });
    });
});