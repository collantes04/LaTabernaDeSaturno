document.addEventListener('DOMContentLoaded', function(){
    let i = 0;
    //Creamos los objetos de clases
    const barbaro = new Clase("Barbaro", "Guerrero salvaje que canaliza la furia primitiva para desatar una fuerza brutal en combate.",
    "recursos/classportraits/barbarian.png", [], null);
        const bardo = new Clase("Bardo", "Artista versátil que utiliza magia, música y conocimiento para apoyar al grupo y manipular a sus enemigos.",
            "recursos/classportraits/bard.png", [], null);
        const clerigo = new Clase("Clerigo", "Devoto canalizador del poder divino, experto en curación, protección y combate contra lo profano.",
            "recursos/classportraits/cleric.png", [], null);
        const druida = new Clase("Druida", "Guardián de la naturaleza con la habilidad de transformarse en animales y conjurar la fuerza del mundo natural.",
            "recursos/classportraits/druida.png", [], null);
        const guerrero = new Clase("Guerrero", "Maestro del combate armado, adaptable a cualquier estilo de lucha gracias a su entrenamiento y disciplina.",
            "recursos/classportraits/fighter.png", [], null);
        const monje = new Clase("Monje", "Luchador espiritual que canaliza su energía interna o ki para realizar hazañas físicas y místicas.",
            "recursos/classportraits/monje.png", [], null);
        const paladin = new Clase("Paladin", "Campeón sagrado que combina habilidades marciales con magia divina, guiado por un juramento de justicia.",
            "recursos/classportraits/paladin.png", [], null);
        const explorador = new Clase("Explorador", "Aventurero ágil y autosuficiente, experto en la supervivencia, la caza y el combate en entornos hostiles.",
            "recursos/classportraits/ranger.png", [], null);
        const picaro = new Clase("Picaro", "Especialista en el sigilo, los trucos y los golpes letales; maestro del subterfugio y la sorpresa.",
            "recursos/classportraits/rogue.png", [], null);
        const hechicero = new Clase("Hechicero", "Lanzador de conjuros que obtiene su poder mágico de una herencia sobrenatural o una fuerza innata.",
            "recursos/classportraits/sorcerer.png", [], null);
        const brujo = new Clase("Brujo", "Usuario de magia otorgada por un pacto con una entidad poderosa, con hechizos únicos y habilidades místicas.",
            "recursos/classportraits/warlock.png", [], null);
        const mago = new Clase("Mago", "Estudioso de la magia arcana, capaz de aprender y lanzar una amplia variedad de conjuros gracias a su intelecto.",
            "recursos/classportraits/wizard.png", [], null);

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
        /*Si el div está creado lo borra y no retorna nada dando la opcion
        de automaticamente crear otro, en el segundo if ve que la clase actual es la misma que clickas
        y borra el div, lo inicializa todo y retorna para que no se cree otro
        hace lo mismo en todas */
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = barbaro;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = bardo;
        botonDeCerrar();
    });

    idCleric.addEventListener('click', function(){
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = clerigo;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = druida;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = guerrero;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = monje;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = paladin;
        botonDeCerrar();
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

        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = explorador;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = picaro;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = hechicero;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = brujo;
        botonDeCerrar();
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
        
        divCreado = setEstructura(titulo, descripcion, imagen);
        controlClase = mago;
        botonDeCerrar();
    });


    

    function setEstructura(titulo, descripcion, imagen) {
        const estructura = document.createElement("div")
        estructura.setAttribute("id", "estructuraEstilo");
        estructura.innerHTML = `
        <div id="flexInput">
            <input type = "button" style:  value = "X" id="botonCerrar">
        </div>
        <h1 style = "text-align: center;" id="estiloTituloClasesJS">${titulo}</h1> 
        <p id="estiloParrafoClasesJS">${descripcion}</p> 
        <img src="${imagen}" style = "width: 350px; height: auto; padding: 10px;">`;
        idDiv.appendChild(estructura);
        return estructura;
    }

    function botonDeCerrar(){
        let botonClase = document.getElementById("botonCerrar");
        botonClase.addEventListener("click", function(){
            divCreado.remove();
            divCreado = null;
            controlClase = null;
        });
    }

});