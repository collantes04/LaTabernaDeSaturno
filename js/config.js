document.addEventListener('DOMContentLoaded', function() {
    const botonRace = document.getElementById('mostrarRace');
    const botonSubrace = document.getElementById('mostrarSubrace');
    const botonClass = document.getElementById('mostrarClass');
    const botonBackground = document.getElementById('mostrarBackground');
    const botonAbilities = document.getElementById('mostrarAbilities');
    const mainscreen = document.getElementById('mainscreen');
    const charsheet = document.getElementById('charsheet')
    const botonRaceBarbaro = document.getElementById('');
    const races = createRaza();
    const clases = createClase();
    const ability = createability();
    botonSubrace.style.display = 'none';
    let razaSeleccionada = null;
    let claseSeleccionada = null;
    let razaGuardar = null;
    
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
        
            features.forEach((feature, index) => {
                const boton = document.createElement('button');
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
                    <h3>${feature.FeatNombre || 'Sin nombre'}</h3>
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
    
        for (let i = 0; i < subrazasHumanas.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonSubraza${i}" type="button" onclick="seleccionarSubraza(${i})">

                        <div class="textoClases">${subrace.SubraceName}</div>
                    </button>
                </div>
            `;
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
            const info = subrazasHumanas[index].descripcion;
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${subrace[index].SubraceName}</strong>. ${subrace.SubraceDesc}</p>`;
    
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
    
        for (let i = 0; i < Clase.length; i++) {
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
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${claseSeleccionada}</strong>. ${info}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
    
            mostrarFeaturesDeClase(Clase[index]);
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
                informacionRazaSeleccionada.innerHTML = `
                    <p><strong> ${claseSeleccionada.Nombre}</strong></p>
                    <p><strong>${claseSeleccionada}</strong>: Level 1</p>
                `;
            }
            if ( claseSeleccionada.su !== 'undefined') {
                botonSubclass.click(); 
            }else{
                botonBackground.click(); 

            }
        };
        function mostrarFeaturesDeClase(clase) {
            const features = claseSeleccionada.hechizo;
            const container = document.getElementById('featureContainer');
            container.innerHTML = ''; 
        
            features.forEach((feature, index) => {
                const boton = document.createElement('button');
                boton.className = 'feature-button';
                boton.innerText =features ;
        
                // Evento hover
                boton.addEventListener('mouseenter', () => {
                    const book = document.getElementById('book');
                    book.innerText = feature.descripcion;
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



    botonSubclass.addEventListener('click', function () {
        mainscreen.innerHTML = '';
        const subclasse = claseSeleccionada.subclase;
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < subclasses.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonSubclase${i}" type="button" onclick="seleccionarSubclase(${i})">
                        <div class="textoClases">${subclasse.name}</div>
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
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${subclasses.name}</strong>. ${subclasses[index].SubclassDesc}</p>`;
    
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
            const subclase = subclasses[subclaseIndex];
    
            let charsheet1 = document.getElementById('charsheet');
    
            if (typeof botonBackground !== 'undefined') {
                botonBackground.click();
            }
        };
    });

    botonBackground.addEventListener('click', function() {
        mainscreen.innerHTML = '';
    
        const Background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Haunted One", "Noble", "Outlander", "Sage", "Soldier", "Urchin"];
        const iconBackground = [
            "../recursos/iconsBackground/Background_Acolyte_Icon.png", "../recursos/iconsBackground/Background_Charlatan_Icon.png", "../recursos/iconsBackground/Background_Criminal_Icon.png", "../recursos/iconsBackground/Background_Entertainer_Icon.png", "../recursos/iconsBackground/Background_Folk_Hero_Icon.png", "../recursos/iconsBackground/Background_Guild_Artisan_Icon.png", "../recursos/iconsBackground/Background_Haunted_One_Icon.png", "../recursos/iconsBackground/Background_Noble_Icon.png",
            "../recursos/iconsBackground/Background_Outlander_Icon.png", "../recursos/iconsBackground/Background_Sage_Icon.png", "../recursos/iconsBackground/Background_Soldier_Icon.png", "../recursos/iconsBackground/Background_Urchin_Icon.png"
        ];
        const backgroundInfo = [
            "Fuerte y salvaje", "Músico encantador", "Sanador y guía", "Controla la naturaleza", "Luchador valiente",
            "Maestro del cuerpo", "Guerrero sagrado", "Cazador experto", "Sigiloso y ágil",
            "Dominador de magia interna", "Mago oscuro", "Erudito de la magia"
        ];
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < Background.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonBackground${i}" type="button" onclick="seleccionarBackground(${i})">
                        <img src="${iconBackground[i]}" alt="${Background[i]}" />
                        <div class="textoBackground">${Background[i]}</div>
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
            const info = backgroundInfo[index];
            infoBackground.innerHTML = `<p>Has seleccionado: <strong>${Background[index]}</strong>. ${info}</p>`;
    
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
            const background = Background[backgroundSeleccionadoIndex];
            const descripcion = backgroundInfo[backgroundSeleccionadoIndex];
        
            const charsheet = document.getElementById('charsheet');
            const informacionBackgroundSeleccionada = document.getElementById('informacionBackgroundSeleccionada');
            if (charsheet) {
                informacionBackgroundSeleccionada.innerHTML = `
                    <p><strong>${background}</strong>: ${descripcion}</p>
                `;
            }
            if (typeof botonAbilities !== 'undefined') {
                botonAbilities.click(); 
            }
        };
    });
   
    

    botonAbilities.addEventListener('click', function() {
        let habilidades = [0, 0]; // Valores iniciales de las habilidades (puedes cambiarlos)
        
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        // Crear y mostrar las habilidades
        for (let i = 0; i < 6; i++) {
            const habilidadDiv = document.createElement('div');
            habilidadDiv.style.marginBottom = '10px';
    
            const label = document.createElement('span');
            label.textContent = `${ability.getabilityNames(i)}`;
            label.style.color = 'red';
    
            const valor = document.createElement('span');
            valor.textContent = ability.getabilityPoints(i);
            valor.id = `valorHabilidad${i}`;

            const botonMas = document.createElement('button');
            botonMas.textContent = '+';
            botonMas.addEventListener('click', function (event) {
                event.preventDefault(); // Esto previene cualquier acción predeterminada, como recargar la página
                //habilidades[i]++;
                //valor.textContent = habilidades[i];
                ability.sumabilityPoint(i);
                valor.textContent = ability.getabilityPoints(i);
            });
    
            const botonMenos = document.createElement('button');
            botonMenos.textContent = '−';
            botonMenos.addEventListener('click', function (event) {
                event.preventDefault(); // Previene cualquier acción predeterminada
                //if (habilidades[i] > 0) {
                //    habilidades[i]--;
                //    valor.textContent = habilidades[i];
                //}
                ability.subabilityPoint(i);
                valor.textContent = ability.getabilityPoint(i);
            });
    
            habilidadDiv.appendChild(label);
            habilidadDiv.appendChild(botonMenos);
            habilidadDiv.appendChild(valor);
            habilidadDiv.appendChild(botonMas);
    
            mainscreen.appendChild(habilidadDiv);
        }
    
        // Botón de Aceptar
        /*const botonAceptar = document.createElement('button');
        botonAceptar.textContent = 'Aceptar';
        botonAceptar.addEventListener('click', function () {
            console.log('Habilidades guardadas:', habilidades);
            // Aquí puedes usar el array como necesites
        });*/
    
        mainscreen.appendChild(botonAceptar);

        
    });
});
