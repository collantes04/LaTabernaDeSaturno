function getId(elemento){
    return elemento.id;
}

document.addEventListener('DOMContentLoaded', function(){

    const idCajaContenido = document.getElementById("cajaContenido");
    
    //Selección de todos los botones del documento en un querySelectorAll
    const botones = document.querySelectorAll('input[type="button"]');
    
    //Carga de datos en los arrays, cada método retorna un objeto de tipo Monstruo o Jefe
    const vectorMonstruos = [createOwlbear(), createOrco(),
        createCGelatinoso(), createGoblin(), createZombie(), createAzotamentes(),
    createManticora(), createQuimera()];

    const vectorJefe = [createVecna(), createTiamat(), createDemogorgon(), createTam(),
        createAcererak(), createKyuss(), createArtemis()];

    let divCreado = null;
    let idActual = -1;

    /*El foreach recorre todos los botones del querySelector, que es una estructura de datos con los botones vaya.
    sacamos los id's de los botones con un método getId que retorna el atributo id, permitiendo así al clicar
    un botó sacar su id de forma dinámica, cosa que no hice en el hoverClases.js, aunque esa clase es
    un caso excepcional.*/

    botones.forEach(function(boton){
        boton.addEventListener('click', function(){
            let id = getId(boton);

            if(esJefe(id)){
                let idCompleto = id;
                let idJefe = id.replace(/^j/, '');
                console.log(idJefe)
                const objetoActual = vectorJefe[idJefe];
                console.log("Apuntando al objeto: " + objetoActual.getNombre());

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
                            <br>
                            <br>
                            
                            <span id="spanEnemigos">
                                ${objetoActual.getStats()}
                            </span>
                        </p>
                    <br>`;
                divCreado = idCajaContenido.appendChild(divExplicativo);
                idActual = id;

            } else {

                if(!esJefe(id)){
                    const objetoActual = vectorMonstruos[id];
                    console.log("Apuntando al objeto: " + objetoActual.getNombre());
        
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
                            <br>
                            <br>
                            
                            <span id="spanEnemigos">
                                ${objetoActual.getStats()}
                            </span>
                        </p>
                        <br>`;

                    divCreado = idCajaContenido.appendChild(divExplicativo);
                    
                    idActual = id;   
                }
            }
            
            
        });
    });

    function esJefe(id){
        //Nos aseguramos que sea un jefe, si su id empieza por j, lo es
        let idVer = id;

        if(idVer.startsWith("j")){
            return true;
        } else {
            return false;
        }
    }

});

