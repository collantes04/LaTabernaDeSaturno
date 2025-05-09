document.addEventListener('DOMContentLoaded', function(){
    let i = 0;
    //Creamos los objetos de clases
    const barbaro = new Clase("Bárbaro", "Guerrero salvaje que canaliza la furia primitiva para desatar una fuerza brutal en combate.", 
        "recursos/classportraits/barbarian.png");

    const bardo = new Clase("Bardo", "Artista versátil que utiliza magia, música y conocimiento para apoyar al grupo y manipular a sus enemigos.",
        "recursos/classportraits/bard.png");

    const clerigo = new Clase("Clérigo", "Devoto canalizador del poder divino, experto en curación, protección y combate contra lo profano."
        , "recursos/classportraits/cleric.png");

    const druida = new Clase("Druida", "Guardián de la naturaleza con la habilidad de transformarse en animales y conjurar la fuerza del mundo natural.", 
        "recursos/classportraits/druida.png");
    
    const guerrero = new Clase("Guerrero", "Maestro del combate armado, adaptable a cualquier estilo de lucha gracias a su entrenamiento y disciplina.", 
        "recursos/classportraits/fighter.png");
    
    const monje = new Clase("Monje", "Luchador espiritual que canaliza su energía interna (ki) para realizar hazañas físicas y místicas.", 
        "recursos/classportraits/monje.png");

    const paladin = new Clase("Paladin", "Campeón sagrado que combina habilidades marciales con magia divina, guiado por un juramento de justicia.", 
        "recursos/classportraits/paladin.png");

    const explorador = new Clase("Explorador", "Aventurero ágil y autosuficiente, experto en la supervivencia, la caza y el combate en entornos hostiles.",
        "recursos/classportraits/ranger.png");

    const picaro = new Clase("Picaro", "Especialista en el sigilo, los trucos y los golpes letales; maestro del subterfugio y la sorpresa.", 
        "recursos/classportraits/rogue.png");
    
    const hechicero = new Clase("Hechicero", "Lanzador de conjuros que obtiene su poder mágico de una herencia sobrenatural o una fuerza innata.", 
        "recursos/classportraits/sorcerer.png");

    const brujo = new Clase("Brujo", "Usuario de magia otorgada por un pacto con una entidad poderosa, con hechizos únicos y habilidades místicas.", 
        "recursos/classportraits/warlock.png");

    const mago = new Clase("Mago", "Estudioso de la magia arcana, capaz de aprender y lanzar una amplia variedad de conjuros gracias a su intelecto.", 
        "recursos/classportraits/wizard.png");


    const idBarb = document.getElementById('barb');
    const idBard = document.getElementById('bard');
    const idCleric = document.getElementById('cleric');
    const idDruid = document.getElementById('druid');
    const idFighter = document.getElementById('fighter');
    const idMonk = document.getElementById('monk');
    const idPal = document.getElementById('paladin');
    const idRang = document.getElementById('ranger');
    const idRog = document.getElementById('rogue');
    const idSorc = document.getElementById('sorcerer');
    const idWarl = document.getElementById('warlock');
    const idWiz = document.getElementById('wizard');
    
    const idDiv = document.getElementById('showClase');
    let divCreado = null;
    let controlClase = null;

    idBarb.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } 
        if (controlClase == barbaro){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }
        let titulo = barbaro.getNombre();
        let descripcion = barbaro.getDescripcion();
        let imagen = barbaro.getImagen();
        
        const estructura = document.createElement("div").
        estructura.style = "width: 100%; background-color: darkgrey;";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = barbaro;
    });

    idBard.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == bardo){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = bardo.getNombre();
        let descripcion = bardo.getDescripcion();
        let imagen = bardo.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = bardo;
    });

    idCleric.addEventListener('click', function(){
        /*Si el div está creado lo borra y no retorna nada dando la opcion
        de automaticamente crear otro, en el segundo if ve que la clase actual es la misma que clickas
        y borra el div, lo inicializa todo y retorna para que no se cree otro
        hace lo mismo en todas */
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == clerigo){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = clerigo.getNombre();
        let descripcion = clerigo.getDescripcion();
        let imagen = clerigo.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = clerigo;
    });

    idDruid.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == druida){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = druida.getNombre();
        let descripcion = druida.getDescripcion();
        let imagen = druida.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = druida;
    });

    idFighter.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == guerrero){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = guerrero.getNombre();
        let descripcion = guerrero.getDescripcion();
        let imagen = guerrero.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = guerrero;
    });
    
    idMonk.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == monje){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = monje.getNombre();
        let descripcion = monje.getDescripcion();
        let imagen = monje.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = monje;
    });

    idPal.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == paladin){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = paladin.getNombre();
        let descripcion = paladin.getDescripcion();
        let imagen = paladin.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = paladin;
    });
        
    idRang.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == explorador){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = explorador.getNombre();
        let descripcion = explorador.getDescripcion();
        let imagen = explorador.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = explorador;
    });


    idRog.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == picaro){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = picaro.getNombre();
        let descripcion = picaro.getDescripcion();
        let imagen = picaro.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = picaro;
    });


    idSorc.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == hechicero){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = hechicero.getNombre();
        let descripcion = hechicero.getDescripcion();
        let imagen = hechicero.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = hechicero;
    });

    
    idWarl.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == brujo){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = brujo.getNombre();
        let descripcion = brujo.getDescripcion();
        let imagen = brujo.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = brujo;
    });

    
    idWiz.addEventListener("click", function(){
        if(divCreado){
            divCreado.remove();
            divCreado = null;
        } if (controlClase == mago){
            if(divCreado){
                divCreado.remove();
            }
            divCreado = null;
            controlClase = null;
            return;
        }

        let titulo = mago.getNombre();
        let descripcion = mago.getDescripcion();
        let imagen = mago.getImagen();
        
        const estructura = document.createElement("div")
        estructura.style = "width: 100%; background-color: darkgrey; ";
        estructura.innerHTML = setEstructura(titulo, descripcion, imagen);

        idDiv.appendChild(estructura);
        divCreado = estructura;
        controlClase = mago;
    });

    function setEstructura(titulo, descripcion, imagen) {
        return `<h1 style = "text-align: center;" id="estiloTituloClasesJS">${titulo}</h1> 
        <p>${descripcion}</p> 
        <img src="${imagen}" style = "width: 350px; height: auto; padding: 10px;">`;

    }


});