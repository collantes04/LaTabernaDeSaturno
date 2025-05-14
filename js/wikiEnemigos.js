function getId(elemento){
    return elemento.id;
}

document.addEventListener('DOMContentLoaded', function(){

    const botones = document.querySelectorAll('input[type="button"]');
    const vectorMonstruos = [createOwlbear(), createOrco(),
        createSlime()];
    botones.forEach(function(boton){
        boton.addEventListener('click', function(){
            let id = getId(boton);
            
            const objetoActual = vectorMonstruos[id];
            if(id == objetoActual.getId()){
                console.log(objetoActual.getId());
            }
        });
    });
});

