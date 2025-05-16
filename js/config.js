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
        <button id="botonConfirmarClase" type="button" onclick="botonConfirmarClase()">Siguiente</button>
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
