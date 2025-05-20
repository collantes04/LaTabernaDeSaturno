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
    botonSubrace.style.display = 'none';
    let razaSeleccionada = null;
    let claseSeleccionada = null;
    let razaGuardar = null;
    

    botonRace.addEventListener('click', function() {
        mainscreen.innerHTML = '';
        let razaSeleccionadaIndex = null;
        let razaSeleccionada = '';


        //const Races = [races[0].raceName, races[1].raceName, races[2].raceName, races[3].raceName, races[4].raceName, races[5].raceName, races[6].raceName, races[7].raceName, races[8].raceName, races[9].raceName, races[10].raceName];
        //const iconRaces = [
        //    races[0].raceImage, races[1].raceImage, races[2].raceImage, races[3].raceImage,
        //    races[4].raceImage, races[5].raceImage, races[6].raceImage, races[7].raceImage,
        //    races[8].raceImage, races[9].raceImage, races[10].raceImage
        //];
        //const raceInfo = [
        //    races[0].raceDesc(), races[1].raceDesc, races[2].raceDesc, races[3].raceDesc, races[4].raceDesc, races[5].raceDesc, races[6].raceDesc, races[7].raceDesc, races[8].raceDesc, races[9].raceDesc, races[10].raceDesc
        //];
        const raceFeatures = {
            "Human": [
                { nombre: "Versatilidad", descripcion: "Los humanos ganan +1 a todas sus puntuaciones de habilidad." },
                { nombre: "Idioma extra", descripcion: "Pueden hablar, leer y escribir un idioma adicional." }
            ],
            "Elf": [
                { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en la oscuridad hasta 60 pies." },
                { nombre: "Sentidos agudos", descripcion: "Proficiente en la habilidad de Percepción." },
                { nombre: "Trance", descripcion: "Los elfos no duermen, solo meditan durante 4 horas." }
            ],
            "Half-Orc": [
                { nombre: "Furia salvaje", descripcion: "Al hacer un golpe crítico, lanzas un dado adicional." },
                { nombre: "Resistencia imparable", descripcion: "Cuando tus PV bajan a 0, puedes quedarte con 1 una vez por descanso largo." }
            ]
            // Puedes seguir agregando otras razas aquí
        };
        
        
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
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${races[index].raceName}</strong>. ${info}</p>`;
        
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
        
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        
            mostrarFeaturesDeRaza(raceFeatures[index]);

        };
        
        window.confirmarRaza = function () {
            if (!razaSeleccionada) {
                alert("Por favor, selecciona una raza antes de continuar.");
                return;
            }
            const raza = razaSeleccionada; 
            razaGuardar = razaSeleccionada;
            if (typeof botonSubrace !== 'undefined'  ) {
                botonSubrace.style.display= '';

                botonSubrace.click(); 
            }else{
                botonClass.click();
            }
        };
        function mostrarFeaturesDeRaza(raza) {
            const features = raza.feature;
            const container = document.getElementById('featureContainer');
            container.innerHTML = ''; 
        
            features.forEach((feature, index) => {
                const boton = document.createElement('button');
                boton.className = 'feature-button';
                boton.innerText = feature.nombre;
        
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
                boton.addEventListener('click',() =>{

                });
                container.appendChild(boton);
            });
        }

        
        

    });



    botonSubrace.addEventListener('click', function () {
        mainscreen.innerHTML = '';
        
        const subrazasHumanas = [
            { nombre: "Humano de la Costa del Viento", descripcion: "Son conocidos por su resistencia y capacidad para adaptarse rápidamente a nuevos entornos. Tienen una gran capacidad para hacer amigos rápidamente, pero también pueden ser muy calculadores cuando es necesario." },
            { nombre: "Humano de la Ciudad", descripcion: "Estos humanos están adaptados a la vida urbana y su cultura se enfoca en la política, el comercio y la tecnología. Son muy hábiles en negociaciones y pueden ser diplomáticos o manipuladores." },
            { nombre: "Humano del Desierto", descripcion: "Originarios de vastas extensiones áridas, estos humanos tienen una resistencia excepcional al calor y la sequía. Son expertos en la supervivencia en condiciones extremas y son conocidos por su habilidad para navegar por los desiertos." },
            { nombre: "Humano de la Isla", descripcion: "Viven en entornos isleños y costeros. Son conocidos por su habilidad para navegar y su resistencia al mar. Tienen un vínculo natural con las criaturas acuáticas y son grandes pescadores." },
            { nombre: "Humano de las Llanuras", descripcion: "Los humanos de las llanuras son conocidos por su resistencia física y su habilidad para moverse por vastos terrenos. Son expertos en la caza y la recolección, y a menudo sirven como exploradores o guías." },
            { nombre: "Humano de la Montaña", descripcion: "Viven en zonas de altas montañas, donde la dureza del terreno y las condiciones extremas han forjado su fuerza física. Son fuertes, resilientes y muy adecuados para la vida en entornos difíciles." }
        ];
        
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < subrazasHumanas.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonSubraza${i}" type="button" onclick="seleccionarSubraza(${i})">
                        <div class="textoClases">${subrazasHumanas[i].nombre}</div>
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
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${subrazasHumanas[index].nombre}</strong>. ${info}</p>`;
    
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
            const subraza = subrazasHumanas[subrazaIndex];
            
            let charsheet1 = document.getElementById('charsheet');
            if (charsheet1) {
                
            }
    
            if (typeof botonBackground !== 'undefined') {
                botonClass.click();
            }
        };
    });
    
    
    botonClass.addEventListener('click', function() {
        mainscreen.innerHTML = '';
    
        const Clase = ["Bárbaro", "Bardo", "Clérigo", "Druida", "Guerrero", "Monje", "Paladín", "Explorador", "Pícaro", "Hechicero", "Brujo", "Mago"];
        const iconClase = [
            "../recursos/iconsClass/barbarian.png", "../recursos/iconsClass/bard.png", "../recursos/iconsClass/cleric.png", "../recursos/iconsClass/druid.png",
            "../recursos/iconsClass/figther.png", "../recursos/iconsClass/monk.png", "../recursos/iconsClass/paladin.png", "../recursos/iconsClass/ranger.png",
            "../recursos/iconsClass/rogue.png", "../recursos/iconsClass/sorcerer.png", "../recursos/iconsClass/warlock.png", "../recursos/iconsClass/wizard.png"
        ];
        const claseInfo = [
            "Fuerte y salvaje", "Músico encantador", "Sanador y guía", "Controla la naturaleza", "Luchador valiente",
            "Maestro del cuerpo", "Guerrero sagrado", "Cazador experto", "Sigiloso y ágil",
            "Dominador de magia interna", "Mago oscuro", "Erudito de la magia"
        ];
        const claseFeatures = {
            "Bárbaro": [
                { nombre: "Rage (Furia)", descripcion: "Ganas ventaja en tiradas de daño cuerpo a cuerpo y resistes el daño de la mitad de tipo físico." },
                { nombre: "Desgarrador", descripcion: "Cuando estás furioso, infliges daño adicional con tus ataques cuerpo a cuerpo." }
            ],
            "Bardo": [
                { nombre: "Inspiración bardica", descripcion: "Puedes dar un dado adicional a una criatura aliada para que lo use en tiradas de ataque, habilidad o salvación." },
                { nombre: "Hechizos de encantamiento", descripcion: "Accedes a hechizos que afectan las mentes de los demás y controlas a tus enemigos." }
            ],
            "Clérigo": [
                { nombre: "Canalizar Divinidad", descripcion: "Usas tu poder divino para realizar un efecto especial, como curar o hacer daño a tus enemigos." },
                { nombre: "Dominio divino", descripcion: "Obtienes beneficios adicionales según el dominio de tu deidad (como la protección, sanación o guerra)." }
            ],
            "Druida": [
                { nombre: "Forma salvaje", descripcion: "Te transformas en una criatura, como un oso o lobo, para obtener habilidades mejoradas en combate." },
                { nombre: "Conjuros de la naturaleza", descripcion: "Usas magia basada en la naturaleza para sanar, controlar el terreno o invocar animales." }
            ],
            "Guerrero": [
                { nombre: "Estilo de lucha", descripcion: "Puedes elegir un estilo de lucha para obtener ventajas como mayor defensa o daño con ciertos tipos de armas." },
                { nombre: "Acción adicional", descripcion: "Puedes realizar una acción adicional en tu turno para atacar o moverte rápidamente." }
            ],
            "Monje": [
                { nombre: "Puño abierto", descripcion: "Tus ataques cuerpo a cuerpo pueden realizar un golpe extra, aturdir o derribar a tus enemigos." },
                { nombre: "Trance", descripcion: "Meditar te permite recuperar puntos de golpe, restaurar energía o mejorar tu destreza." }
            ],
            "Paladín": [
                { nombre: "Imposición de manos", descripcion: "Sanar a los demás o a ti mismo mediante la energía divina." },
                { nombre: "Aura de protección", descripcion: "Tus aliados cercanos obtienen un bono en sus tiradas de salvación." }
            ],
            "Explorador": [
                { nombre: "Explorador natural", descripcion: "Obtienes habilidades para moverte a través de terrenos difíciles, rastrear enemigos y moverte sigilosamente." },
                { nombre: "Compañero animal", descripcion: "Invocas a un animal aliado que te ayuda en combate o exploración." }
            ],
            "Pícaro": [
                { nombre: "Ataque furtivo", descripcion: "Puedes infligir daño adicional si atacas a un enemigo que no te ve." },
                { nombre: "Desaparecer", descripcion: "Usas tu agilidad para esconderte rápidamente y aparecer de nuevo." }
            ],
            "Hechicero": [
                { nombre: "Magia de sangre", descripcion: "Puedes usar tus puntos de hechicería para aumentar el poder de tus hechizos o modificar sus efectos." },
                { nombre: "Conjuros espontáneos", descripcion: "Puedes lanzar conjuros sin prepararlos con anticipación, usando tu poder innato." }
            ],
            "Brujo": [
                { nombre: "Invocación", descripcion: "Accedes a un poder oscuro o arcano que te da habilidades especiales según tu pacto." },
                { nombre: "Descarga de Eldritch", descripcion: "Lanzas un ataque a distancia que inflige daño psíquico o arcano." }
            ],
            "Mago": [
                { nombre: "Preparación de hechizos", descripcion: "Preparas tus hechizos antes de cada descanso largo y eliges el que usarás en combate." },
                { nombre: "Conjuros arcanos", descripcion: "Accedes a una variedad de hechizos poderosos para controlar la magia, el daño y las ilusiones." }
            ]
        };
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < Clase.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarClase(${i})">
                        <img src="${iconClase[i]}" alt="${Clase[i]}" />
                        <div class="textoClases">${Clase[i]}</div>
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
            claseSeleccionada = Clase[index];
            claseSeleccionadaIndex = index;
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = claseInfo[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${Clase[index]}</strong>. ${info}</p>`;
    
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
            const descripcion = claseInfo[claseSeleccionadaIndex];
            const charsheet = document.getElementById('charsheet');
            const ImagenClaseSeleccionada = document.getElementById('ImagenClaseSeleccionada');
            const informacionRazaSeleccionada = document.getElementById('informacionRazaSeleccionada');

            if (charsheet) {
                if(ImagenClaseSeleccionada){
                    ImagenClaseSeleccionada.innerHTML = `
                    <img src="${iconClase[claseSeleccionadaIndex]}" alt="${Clase[claseSeleccionadaIndex]}"> `;
                }
                informacionRazaSeleccionada.innerHTML = `
                    <p><strong> ${razaGuardar}</strong></p>
                    <p><strong>${clase}</strong>: Level 1</p>
                `;
            }
            if (typeof botonBackground !== 'undefined') {
                botonBackground.click(); 
            }
        };
        function mostrarFeaturesDeClase(clase) {
            const features = claseFeatures[clase];
            const container = document.getElementById('featureContainer');
            container.innerHTML = ''; 
        
            features.forEach((feature, index) => {
                const boton = document.createElement('button');
                boton.className = 'feature-button';
                boton.innerText = feature.nombre;
        
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
        for (let i = 0; i < 2; i++) {
            const habilidadDiv = document.createElement('div');
            habilidadDiv.style.marginBottom = '10px';
    
            const label = document.createElement('span');
            label.textContent = `Habilidad ${i + 1}: `;
    
            const valor = document.createElement('span');
            valor.textContent = habilidades[i];
            valor.id = `valorHabilidad${i}`;
    
            const botonMas = document.createElement('button');
            botonMas.textContent = '+';
            botonMas.addEventListener('click', function (event) {
                event.preventDefault(); // Esto previene cualquier acción predeterminada, como recargar la página
                habilidades[i]++;
                valor.textContent = habilidades[i];
            });
    
            const botonMenos = document.createElement('button');
            botonMenos.textContent = '−';
            botonMenos.addEventListener('click', function (event) {
                event.preventDefault(); // Previene cualquier acción predeterminada
                if (habilidades[i] > 0) {
                    habilidades[i]--;
                    valor.textContent = habilidades[i];
                }
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
