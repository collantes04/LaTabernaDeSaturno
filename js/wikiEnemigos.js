function getId(elemento){
    return elemento.id;
}

document.addEventListener('DOMContentLoaded', function(){

    const idCajaContenido = document.getElementById("cajaContenido");
    const botones = document.querySelectorAll('input[type="button"]');
    const vectorMonstruos = [createOwlbear(), createOrco(),
        createSlime()];

    const vectorJefe = [createVecna(), createTiamat(), createDemogorgon()];
    let divCreado = null;
    let idActual = -1;
    botones.forEach(function(boton){
        boton.addEventListener('click', function(){
            let id = getId(boton);

            if(esJefe(id)){
                let idCompleto = id;
                let idJefe = id.replace(/^j/, '');
                console.log(idJefe)
                const objetoActual = vectorJefe[idJefe];
                console.log("Objeto obtenido: " + objetoActual.getNombre());

                if(divCreado){
                    divCreado.remove();
                    divCreado = null;    
                }

                if(idActual == id){
                    if(divCreado){
                        divCreado.remove()
                    }
                    divCreado = null;
                    idActual = -1;
                    return;
                }

                const divExplicativo = document.createElement('div')
                divExplicativo.setAttribute("id", "estiloDivExpl");
                divExplicativo.innerHTML = `
                <div id="divImgMons">
                    <h1 id="tituloJS"> ${objetoActual.getNombre()}</h1>
                    <img src="${objetoActual.getImg()}" id="imgJS">  
                </div>
                    <p id="parrafoJS">
                        ${objetoActual.getDesc()}
                    </p>`;
                divCreado = idCajaContenido.appendChild(divExplicativo);
                idActual = id;

            } else {

                if(!esJefe(id)){
                    const objetoActual = vectorMonstruos[id];
                    console.log("Objeto obtenido: " + objetoActual.getNombre());
        
                    if(divCreado){
                        divCreado.remove();
                        divCreado = null;
                    }
                    
                    console.log(idActual);
                    console.log(id);
                    if(idActual == id){
                        if(divCreado){
                            divCreado.remove()
                        }
                        divCreado = null;
                        idActual = -1;
                        return;
                    }
        
                    const divExplicativo = document.createElement('div')
                    divExplicativo.setAttribute("id", "estiloDivExpl");
                    divExplicativo.innerHTML = `
                    <div id="divImgMons">
                        <h1 id="tituloJS"> ${objetoActual.getNombre()}</h1>
                        <img src="${objetoActual.getImg()}" id="imgJS">  
                    </div>
                        <p id="parrafoJS">
                            ${objetoActual.getDesc()}
                        </p>`;
                    divCreado = idCajaContenido.appendChild(divExplicativo);
                    idActual = id;   
                }
                     
            }
            
            
        });
    });

    function esJefe(id){

        let idVer = id;

        if(idVer.startsWith("j")){
            return true;
        } else {
            return false;
        }
    }

});

