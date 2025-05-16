document.addEventListener('DOMContentLoaded', function() {
    const botonRace = document.getElementById('mostrarRace');
    const botonSubrace = document.getElementById('mostrarSubrace');
    const botonClass = document.getElementById('mostrarClass');
    const botonBackground = document.getElementById('mostrarBackground');
    const botonAbilities = document.getElementById('mostrarAbilities');
    const mainscreen = document.getElementById('mainscreen');
    const botonRaceBarbaro = document.getElementById('')
    

    botonRace.addEventListener('click', function() {
        mainscreen.innerHTML = '';
        let razaSeleccionadaIndex = null;
    
        const Races = ["Human", "Elf", "Drow", "Half-Elf", "Half-Orc", "Halfling", "Dwarf", "Gnome", "Tiefling", "Githyanki", "Dragonborn"];
        const iconRaces = [
            "../recursos/iconsRace/Race_Human.png", "../recursos/iconsRace/Race_Elf.png", "../recursos/iconsRace/Race_Drow.png", "../recursos/iconsRace/Race_Half-Elf.png",
            "../recursos/iconsRace/Race_Half-Orc.png", "../recursos/iconsRace/Race_Halfling.png", "../recursos/iconsRace/Race_Dwarf.png", "../recursos/iconsRace/Race_Gnome.png",
            "../recursos/iconsRace/Race_Tiefling.png", "../recursos/iconsRace/Race_Githyanki.png", "../recursos/iconsRace/Race_Dragonborn.png"
        ];
        const raceInfo = [
            "Versátiles y adaptables, los humanos no tienen rasgos raciales específicos, pero ganan una bonificación adicional a sus habilidades.",
            "Ágiles y longevos, los elfos tienen ventaja en percepción, inmunidad al sueño mágico y visión en la oscuridad.",
            "Elfos oscuros del inframundo con afinidad por la magia, tienen resistencia a hechizos y visión superior en la oscuridad.",
            "Híbridos versátiles, heredan lo mejor de humanos y elfos, incluyendo visión en la oscuridad y bonificaciones sociales.",
            "Fuertes y temidos, los semi-orcos tienen furia salvaje, visión en la oscuridad y pueden resistir un golpe mortal una vez.",
            "Pequeños y ágiles, los medianos tienen suerte (repetir tiradas de 1), y se escabullen con facilidad entre enemigos grandes.",
            "Resistentes y robustos, los enanos tienen ventaja contra venenos, gran constitución y conocimientos sobre piedra.",
            "Pequeños genios, los gnomos poseen una gran inteligencia natural, resistencia a la magia y afinidad con ilusiones.",
            "Descendientes de demonios, los tieflings tienen resistencia al fuego y dominan hechizos oscuros innatos.",
            "Guerreros psiónicos del Plano Astral, expertos en combate y manipulación mental con acceso a magia única.",
            "Descendientes de dragones, los dracónidos poseen aliento elemental y resistencia al tipo de daño de su linaje dracónico."
        ];
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
    
        for (let i = 0; i < Races.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarRace(${i})">
                        <img src="${iconRaces[i]}" alt="${Races[i]}" />
                        <div class="textoClases">${Races[i]}</div>
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
            razaSeleccionadaIndex = index;
        
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = raceInfo[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${Races[index]}</strong>. ${info}</p>`;
        
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
        
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        
            mostrarFeaturesDeRaza(Races[index]);

        };
        
        window.confirmarRaza = function () {
            if (razaSeleccionadaIndex === null) {
                alert("Por favor, selecciona una raza antes de continuar.");
                return;
            }
        
            const raza = Races[razaSeleccionadaIndex];
            const descripcion = raceInfo[razaSeleccionadaIndex];
        
            const charsheet = document.getElementById('charsheet');
            if (charsheet) {
                charsheet.innerHTML = `
                    <h2>Raza Seleccionada</h2>
                    <p><strong>${raza}</strong>: ${descripcion}</p>
                `;
            }
            if (typeof botonSubrace !== 'undefined') {
                botonSubrace.click(); 
            }
        };
        function mostrarFeaturesDeRaza(raza) {
            const features = raceFeatures[raza];
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

    botonSubrace.addEventListener('click', function () {
        mainscreen.innerHTML = '';
    
        const Races = ["Bárbaro", "Bardo", "Clérigo", "Druida", "Guerrero", "Monje", "Paladín", "Explorador", "Pícaro", "Hechicero", "Brujo", "Mago"];
        const iconRaces = [
            "../recursos/iconsClass/barbarian.png", "../recursos/iconsClass/bard.png", "../recursos/iconsClass/cleric.png", "../recursos/iconsClass/druid.png",
            "../recursos/iconsClass/figther.png", "../recursos/iconsClass/monk.png", "../recursos/iconsClass/paladin.png", "../recursos/iconsClass/ranger.png",
            "../recursos/iconsClass/rogue.png", "../recursos/iconsClass/sorcerer.png", "../recursos/iconsClass/warlock.png", "../recursos/iconsClass/wizard.png"
        ];
        const raceInfo = [
            "Fuerte y salvaje", "Músico encantador", "Sanador y guía", "Controla la naturaleza", "Luchador valiente",
            "Maestro del cuerpo", "Guerrero sagrado", "Cazador experto", "Sigiloso y ágil",
            "Dominador de magia interna", "Mago oscuro", "Erudito de la magia"
        ];
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < Races.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarClase(${i})">
                        <img src="${iconRaces[i]}" alt="${Races[i]}" />
                        <div class="textoClases">${Races[i]}</div>
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
        html+=`<div id="botonConfirmarSeleccionMainscreen"> 
            <button id="botonConfirmarSubraza" type="button" onclick="botonConfirmarSubraza()">Siguiente</button>
            </div>
        `
        ;
        ;
    
        mainscreen.innerHTML += html;
    
        window.seleccionarClase = function (index) {
            console.log('Botón seleccionado:', index);
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = raceInfo[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${Races[index]}</strong>. ${info}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
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
        `
        html += `<div id="featureContainer" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;"></div>`;
        html += `<div id="botonConfirmarSeleccionMainscreen"> 
                    <button id="botonConfirmarClase" type="button" onclick="botonConfirmarClase()">Siguiente</button>
                </div>`;
        mainscreen.innerHTML += html;









        window.seleccionarClase = function (index) {
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
        
            mostrarFeaturesDeRaza(Clase[index]);

        };










        window.confirmarClase = function () {
            if (claseSeleccionadaIndex === null) {
                alert("Por favor, selecciona una clase antes de continuar.");
                return;
            }
        
            const clase = Clase[claseSeleccionadaIndex];
            const descripcion = claseInfo[claseSeleccionadaIndex];
        
            const charsheet = document.getElementById('charsheet');
            if (charsheet) {
                charsheet.innerHTML = `
                    <h2>Clase Seleccionada</h2>
                    <p><strong>${clase}</strong>: ${descripcion}</p>
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
    
        const Races = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Haunted One", "Noble", "Outlander", "Sage", "Soldier", "Urchin"];
        const iconRaces = [
            "../recursos/iconsBackground/Background_Acolyte_Icon.png", "../recursos/iconsBackground/Background_Charlatan_Icon.png", "../recursos/iconsBackground/Background_Criminal_Icon.png", "../recursos/iconsBackground/Background_Entertainer_Icon.png", "../recursos/iconsBackground/Background_Folk_Hero_Icon.png", "../recursos/iconsBackground/Background_Guild_Artisan_Icon.png", "../recursos/iconsBackground/Background_Haunted_One_Icon.png", "../recursos/iconsBackground/Background_Noble_Icon.png",
            "../recursos/iconsBackground/Background_Outlander_Icon.png", "../recursos/iconsBackground/Background_Sage_Icon.png", "../recursos/iconsBackground/Background_Soldier_Icon.png", "../recursos/iconsBackground/Background_Urchin_Icon.png"
        ];
        const raceInfo = [
            "Fuerte y salvaje", "Músico encantador", "Sanador y guía", "Controla la naturaleza", "Luchador valiente",
            "Maestro del cuerpo", "Guerrero sagrado", "Cazador experto", "Sigiloso y ágil",
            "Dominador de magia interna", "Mago oscuro", "Erudito de la magia"
        ];
    
        let html = `<div id="grupoSelectorPersonaje">`;
    
        for (let i = 0; i < Races.length; i++) {
            html += `
                <div class="casillaSelectorPersonaje">
                    <button id="botonClases${i}" type="button" onclick="seleccionarClase(${i})">
                        <img src="${iconRaces[i]}" alt="${Races[i]}" />
                        <div class="textoClases">${Races[i]}</div>
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
    
        mainscreen.innerHTML += html;
    
        window.seleccionarClase = function (index) {
            console.log('Botón seleccionado:', index);
            const infoPersonaje = document.getElementById('infoPersonaje');
            const info = raceInfo[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${Races[index]}</strong>. ${info}</p>`;
    
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonClases${index}`);
            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        };
    });
    

    botonAbilities.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';


    });
});
