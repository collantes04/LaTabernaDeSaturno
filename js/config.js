document.addEventListener('DOMContentLoaded', function() {
    const botonRace = document.getElementById('mostrarRace');
    const botonSubrace = document.getElementById('mostrarSubrace');
    const botonClass = document.getElementById('mostrarClass');
    const botonSubclass = document.getElementById('mostrarSubclase')
    const botonBackground = document.getElementById('mostrarBackground');
    const botonAbilities = document.getElementById('mostrarAbilities');
    const mainscreen = document.getElementById('mainscreen');
    const charsheet = document.getElementById('charsheet')
    const botonRaceBarbaro = document.getElementById('mostrarSubclase');
    const races = createRaza();
    const clases = createClase();
    const backgrounds = createBackgrounds();
    const ability = createability();
    const bility = createability();
    botonSubrace.style.display = 'none';
    botonSubclass.style.display = 'none';
    let razaSeleccionada = null;
    let claseSeleccionada = null;
    let razaGuardar = null;
    let subrazaGuardada = null;
    
    function getability() {
        return ability;
    }

    botonRace.addEventListener('click', function() {
        mainscreen.innerHTML = '';
        let razaSeleccionadaIndex = null;
        let razaSeleccionada = '';


    
        
        
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < races.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarRace(${i})">
                        <img src="${races[i].raceImage}" alt="${races[i].raceName}" />
                        <div class="textoClases">${races[i].raceName}</div>
                    </button>
                </div>
            `;
        }
        html += `</div>`;
        
        html += `
            <div id="infoPersonaje">
                <p>Selecciona una clase para ver la información.</p>
            </div>
        `
        html += `
            <div id="featureContainer" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;"></div>
        `;
    
        html+=`<div id="botonConfirmarSeleccionMainscreen"> 
            <button id="botonConfirmarRaza" type="button" onclick="confirmarRaza()">Siguiente</button>
            </div>
        `
        ;
        
        mainscreen.innerHTML += html;

        // Función de selección de clase
        window.seleccionarRace = function (index) {
            razaSeleccionada = races[index];
            razaGuardar = razaSeleccionada;  // Guardar la raza seleccionada

            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = races[index].raceDesc;
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${razaSeleccionada.raceName}</strong>. ${info}</p>`;
        
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
        
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        
            mostrarFeaturesDeRaza(razaSeleccionada);

        };
        
        window.confirmarRaza = function () {
            if (!razaSeleccionada) {
                alert("Por favor, selecciona una raza antes de continuar.");
                return;
            }
            const raza = razaSeleccionada; 
            razaGuardar = razaSeleccionada;
            if (raza.raceSubraces !== null ) {
                botonSubrace.style.display= '';
                botonSubrace.click(); 
            }else{
                botonClass.click();
            }
        };
        function mostrarFeaturesDeRaza(raza) {
            const features = raza.raceFeat ;
            const container = document.getElementById('featureContainer');
            container.innerHTML = ''; 

            if(features == null){
                console.log("No tiene features");
                return;
            }
        
            features.forEach((feature) => {
                const boton = document.createElement('button');
                boton.disabled = true;
                boton.className = 'feature-button';
                let img = document.createElement('img');
                img.src = feature.FeatImg;
                
                img.style.width = '50px'; // Ajusta el tamaño según necesites
                img.style.height = '50px    ';
                boton.appendChild(img);                
        
                // Evento hover
                boton.addEventListener('mouseenter', () => {
                    const book = document.getElementById('book');
                    book.innerHTML = `
                    <h3  style= "text-align: center;">${feature.FeatNombre || 'Sin nombre'}</h3>
                    <p>${feature.FeatDesc || 'Sin descripción'}</p>
                `;
                book.style.display = 'block';

                });
        
                boton.addEventListener('mouseleave', () => {
                    const book = document.getElementById('book');
                    book.innerText = '';
                });
                
                container.appendChild(boton);
            });
        }

        
        

    });



    botonSubrace.addEventListener('click', function () {
        mainscreen.innerHTML = '';
        const subrace = razaGuardar.raceSubraces;
        
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < subrace.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonSubraza${i}" type="button" onclick="seleccionarSubraza(${i})">
                        <img src="${subrace[i].SubraceImg}" alt="${subrace[i].SubraceName}"/>
                        <div class="textoClases">${subrace[i].SubraceName}</div>
                    </button>
                </div>`;
        }
    
        html += `</div>`;
        html += `
            <div id="infoPersonaje">
                <p>Selecciona una subraza para ver la información.</p>
            </div>
        `;
        html += `<div id="botonConfirmarSeleccionMainscreen">
                    <button id="botonConfirmarSubraza" type="button" onclick="confirmarSubraza()">Siguiente</button>
                </div>
        `;
        
        mainscreen.innerHTML += html;
    
        window.seleccionarSubraza = function(index) {
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = subrace[index].descripcion;
            subrazaGuardada = subrace[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${subrace[index].SubraceName}</strong>. ${subrace[index].SubraceDesc}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonSubraza${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        };
    
        window.confirmarSubraza = function() {
            const selectedButton = document.querySelector('.botonSeleccionado');
            if (!selectedButton) {
                alert("Por favor, selecciona una subraza antes de continuar.");
                return;
            }
    
            const subrazaIndex = selectedButton.id.replace('botonSubraza', '');
            const subraza = subrace;
            
            let charsheet1 = document.getElementById('charsheet');
            
            if (typeof botonBackground !== 'undefined') {
                botonClass.click(); 
            }
        };
    });
    
    
    botonClass.addEventListener('click', function() {
        mainscreen.innerHTML = '';
    
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < clases.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarClase(${i})">
                        <img src="${clases[i].Imagen}" alt="${clases[i].Nombre}" />
                        <div class="textoClases">${clases[i].Nombre}</div>
                    </button>
                </div>
            `;
        }
    

        html += `</div>`;
        html += `
            <div id="infoPersonaje">
                <p>Selecciona una clase para ver la información.</p>
            </div>
        `;
        html += `<div id="featureContainer" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;"></div>`;
        html += `<div id="botonConfirmarSeleccionMainscreen"> 
                    <button id="botonConfirmarClase" type="button" onclick="confirmarClase()">Siguiente</button>
                </div>`;
        mainscreen.innerHTML += html;







        window.seleccionarClase = function(index) {
            claseSeleccionada = clases[index];
            claseSeleccionadaIndex = index;
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = claseSeleccionada.Descripcion;
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${claseSeleccionada.Nombre}</strong>. ${info}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
            
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
            
            mostrarHechizosClases(claseSeleccionada);
        };
    
        window.confirmarClase = function() {
            if (!claseSeleccionada) {
                alert("Por favor, selecciona una clase antes de continuar.");
                return;
            }
            const clase = Clase[claseSeleccionadaIndex];
            const descripcion = claseSeleccionada.Descripcion;
            const charsheet = document.getElementById('charsheet');
            const ImagenClaseSeleccionada = document.getElementById('ImagenClaseSeleccionada');
            const informacionRazaSeleccionada = document.getElementById('informacionRazaSeleccionada');

            if (charsheet) {
                if(ImagenClaseSeleccionada){
                    ImagenClaseSeleccionada.innerHTML = `
                    <img src="${claseSeleccionada.Imagen}" alt="${claseSeleccionada}"> `;
                }

                if(subrazaGuardada != null){
                    informacionRazaSeleccionada.innerHTML = `
                    <p><strong> ${razaGuardar.raceName} - ${subrazaGuardada.SubraceName}</strong></p>
                    <p><strong>${claseSeleccionada.Nombre}</strong>: Level 1</p>
                `;
                } else {
                    informacionRazaSeleccionada.innerHTML = `
                    <p><strong> ${razaGuardar.raceName}</strong></p>
                    <p><strong>${claseSeleccionada.Nombre}</strong>: Level 1</p>
                `;
                }

            }
            if ( claseSeleccionada.subclase !== null) {
              botonSubclass.style.display= '';
                botonSubclass.click(); 
            }else{
                botonBackground.click(); 

            }
        };
        
        function mostrarHechizosClases(claseSeleccionada) {
            const arrayHechizos = claseSeleccionada.spells; //Esto son hechizos

            if(arrayHechizos == undefined){
                console.log("La clase " + claseSeleccionada.Nombre + " no tiene hechizos");
                return;
            }

            const container = document.getElementById('featureContainer');
            container.innerHTML = '';
            const boton = document.createElement("button");
            boton.className = "feature-button";
            console.log(arrayHechizos);

            for (let i = 0; i < arrayHechizos.length; i++) {
        

                const boton = document.createElement('button');
                const img = document.createElement('img');

                boton.setAttribute("class", "feature-button");
                boton.setAttribute('type', 'button');
                boton.setAttribute('disabled', true);
                boton.className = 'feature-button';
                
                boton.appendChild(img);

                
                img.setAttribute('src', arrayHechizos[i].img);
                img.setAttribute('class', 'feature-button');
                

                boton.addEventListener('mouseenter', () => {
                    const book = document.getElementById('book');
                    if(arrayHechizos[i].dado != null){
                        dado = arrayHechizos[i].dado;
                        tituloDado = "Dado: ";
                        book.innerHTML = `
                        <h3 style= "text-align: center;">${arrayHechizos[i].name}</h3>
                        <p>${arrayHechizos[i].desc}</p>
                        <br>
                        <br>
                        <div id="cajaDado">
                            <p>Dado:</p>
                            <p>
                                ${arrayHechizos[i].dado}
                            </p>
                        </div>`;

                    } else {
                        book.innerHTML = `
                        <h3 style= "text-align: center;">${arrayHechizos[i].name}</h3>
                        <p>${arrayHechizos[i].desc}</p>`;
                    }
                    
                });

                boton.addEventListener('mouseleave', () => {
                    const book = document.getElementById('book');
                    book.innerText = '';
                });

                container.appendChild(boton);
                
            }

        }


    });



    botonSubclass.addEventListener('click', function () {
        mainscreen.innerHTML = '';
        const subclasse = claseSeleccionada.subclase;
        
        if(subclasse == null){
            console.log("No hay subclase para: " + claseSeleccionada.Nombre);
        }
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < subclasse.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonSubclase${i}" type="button" onclick="seleccionarSubclase(${i})">
                        <img src="${subclasse[i].img}" alt="${subclasse[i].name}" />
                        <div class="textoClases">${subclasse[i].name}</div>
                    </button>
                </div>
            `;
        }
    
        html += `</div>`;
        html += `
            <div id="infoPersonaje">
                <p>Selecciona una subclase para ver la información.</p>
            </div>
        `;
        html += `
            <div id="botonConfirmarSeleccionMainscreen">
                <button id="botonConfirmarSubclase" type="button" onclick="confirmarSubclase()">Siguiente</button>
            </div>
        `;
    
        mainscreen.innerHTML += html;
    
        window.seleccionarSubclase = function(index) {
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = subclasse.desc;
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${subclasse.name}</strong>. ${subclasse[index].SubclassDesc}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonSubclase${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        };
    
        window.confirmarSubclase = function() {
            const selectedButton = document.querySelector('.botonSeleccionado');
            if (!selectedButton) {
                alert("Por favor, selecciona una subclase antes de continuar.");
                return;
            }
    
            const subclaseIndex = selectedButton.id.replace('botonSubclase', '');
            const subclase = subclasse[subclaseIndex];
    
            let charsheet1 = document.getElementById('charsheet');
    
            if (typeof botonBackground !== 'undefined') {
                botonBackground.click();
            }
        };
    });

    botonBackground.addEventListener('click', function() {
        mainscreen.innerHTML = '';
        let html = `<div id="grupoSelectorPersonaje">`;

    
        for (let i = 0; i < backgrounds.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonBackground${i}" type="button" onclick="seleccionarBackground(${i})">
                        <img src="${backgrounds[i].imagen}" alt="${backgrounds[i].name}" />
                        <div class="textoBackground">${backgrounds[i].name}</div>
                    </button>
                </div>
            `;
        }
    
        html += `</div>`;
        html += `
            <div id="infoBackground">
                <p>Selecciona un background para ver la información.</p>
            </div>
        `;
        html += `<div id="botonConfirmarSeleccionMainscreen"> 
                <button id="botonConfirmarBackground" type="button" onclick="confirmarBackground()">Siguiente</button>
            </div>`;
        mainscreen.innerHTML += html;

    
    
        window.seleccionarBackground = function(index) {
            backgroundSeleccionadoIndex = index;

            const infoBackground = document.getElementById('infoBackground');
            const info = backgrounds[index].desc;
            infoBackground.innerHTML = `<p>Has seleccionado: <strong>${backgrounds[index].name}</strong>. ${info}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonBackground${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        };
        window.confirmarBackground = function() {
            if (backgroundSeleccionadoIndex === null) {
                alert("Por favor, selecciona un background antes de continuar.");
                return;
            }
            const background = backgrounds[backgroundSeleccionadoIndex].name;
            const description = backgrounds[backgroundSeleccionadoIndex].descripcion;
        
            const charsheet = document.getElementById('charsheet');
            const informacionBackgroundSeleccionada = document.getElementById('informacionBackgroundSeleccionada');
            if (charsheet) {
                informacionBackgroundSeleccionada.innerHTML = `
                    <p style="color: white;"><strong>${background}</strong>: ${description}</p>
                `;
            }
            if (typeof botonAbilities !== 'undefined') {
                botonAbilities.click(); 
            }
        };
    });
   
    

   botonAbilities.addEventListener('click', function () {
    mainscreen.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        bility.setabilityPoints(i, 8); // Inicializa con 8

        const habilidadDiv = document.createElement('div');
        habilidadDiv.style.display = 'flex';
        habilidadDiv.style.flexDirection = 'column';
        habilidadDiv.style.alignItems = 'center';
        habilidadDiv.style.padding = '10px';
        habilidadDiv.style.backgroundColor = 'rgba(34, 34, 34, 0.5)';
        habilidadDiv.style.borderRadius = '8px';
        habilidadDiv.style.color = 'white';
        habilidadDiv.style.width = '120px';
        habilidadDiv.classList.add('habilidad-columna');
        habilidadDiv.style.opacity = '0.6';

        const label = document.createElement('span');
        label.textContent = `${bility.getabilityNames(i)}`;
        label.style.color = 'white';
        label.style.fontSize = '18px';
        label.style.fontWeight = 'bold';
        label.style.marginBottom = '4px';
        label.style.marginTop = '4px';

        const modValue = bility.calculateabilityModifs(i);
        const modificador = document.createElement('span');
        modificador.textContent = ` ${modValue >= 0 ? '+' : ''}${modValue}`;
        modificador.style.color = 'white';
        modificador.style.fontSize = '18px';
        modificador.style.fontWeight = 'bold';
        modificador.style.marginBottom = '4px';
        modificador.style.marginTop = '4px';

        const valor = document.createElement('span');
        valor.textContent = bility.getabilityPoints(i);
        valor.id = `valorHabilidad${i}`;
        valor.style.color = 'white';
        valor.style.fontSize = '18px';
        valor.style.margin = '8px 0';

        const botonMas = document.createElement('button');
        botonMas.textContent = '+';
        botonMas.style.width = '30px';
        botonMas.style.height = '30px';
        botonMas.style.fontSize = '20px';
        botonMas.style.margin = '4px';
        botonMas.addEventListener('click', function (event) {
            event.preventDefault();
            bility.sumabilityPoint(i);
            valor.textContent = bility.getabilityPoints(i);
            const newMod = bility.calculateabilityModifs(i);
            modificador.textContent = ` ${newMod >= 0 ? '+' : ''}${newMod}`;
        });

        const botonMenos = document.createElement('button');
        botonMenos.textContent = '−';
        botonMenos.style.width = '30px';
        botonMenos.style.height = '30px';
        botonMenos.style.fontSize = '20px';
        botonMenos.style.margin = '4px';
        botonMenos.addEventListener('click', function (event) {
            event.preventDefault();
            bility.subabilityPoint(i);
            valor.textContent = bility.getabilityPoints(i);
            const newMod = bility.calculateabilityModifs(i);
            modificador.textContent = ` ${newMod >= 0 ? '+' : ''}${newMod}`;
        });

        habilidadDiv.appendChild(label);
        habilidadDiv.appendChild(botonMas);
        habilidadDiv.appendChild(valor);
        habilidadDiv.appendChild(botonMenos);
        habilidadDiv.appendChild(modificador);

        mainscreen.appendChild(habilidadDiv);
    }






    const botonGuardar = document.createElement('button');
    botonGuardar.textContent = 'Guardar Stats en CharSheet';
    botonGuardar.style.marginTop = '20px';
    botonGuardar.style.padding = '10px 20px';
    botonGuardar.style.fontSize = '16px';
    botonGuardar.style.cursor = 'pointer';
    botonGuardar.setAttribute("type", "button");

    botonGuardar.addEventListener('click', function () {
        const charsheet = document.getElementById('charsheet');
        if (!charsheet) {
            alert('No se encontró el div charsheet');
            return;
        }

        // Buscar si ya hay un contenedor para las stats
        let statsContainer = document.getElementById('stats-container');

        if (!statsContainer) {
            // Si no existe, crear uno nuevo y agregarlo al charsheet
            statsContainer = document.createElement('div');
            statsContainer.id = 'stats-container';
            charsheet.appendChild(statsContainer);
        } else {
            // Si ya existe, limpiar su contenido para no duplicar
            statsContainer.innerHTML = '';
        }

        // Ahora agregar las stats dentro del contenedor limpio
        for (let i = 0; i < 6; i++) {
            const nombre = bility.getabilityNames(i);
            const puntos = bility.getabilityPoints(i);
            const mod = bility.calculateabilityModifs(i);

            const statDiv = document.createElement('div');
            statDiv.style.color = 'white';
            statDiv.style.marginBottom = '8px';
            statDiv.textContent = `${nombre}: ${puntos} (${mod >= 0 ? '+' : ''}${mod})`;

            statsContainer.appendChild(statDiv);
        }

            });

            mainscreen.appendChild(botonGuardar);




        });

});
