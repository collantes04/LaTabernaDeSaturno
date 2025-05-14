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
        html+=`<div id ="botonConfirmarSeleccionClase"> 
            <button id="botonConfirmarClase" type="button" onclick="confirnarClase(${i})
        </div>
        `
        ;
        
        mainscreen.innerHTML += html;

        // Función de selección de clase
        window.seleccionarClase = function (index) {
            console.log('Botón seleccionado:', index);  // Verifica que la función se llama correctamente
            const infoPersonaje = document.getElementById('infoPersonaje');
            
            const info = raceInfo[index];
            infoPersonaje.innerHTML = `<p>Has seleccionado: <strong>${Races[index]}</strong>. ${info}</p>`;
            
            const allButtons = document.querySelectorAll('#grupoSelectorPersonaje button');
            allButtons.forEach(button => button.classList.remove('botonSeleccionado'));
    
            const selectedButton = document.getElementById(`botonClases${index}`);
            selectedButton.classList.add('botonSeleccionado');

            if (selectedButton) {
                selectedButton.classList.add('botonSeleccionado');
            }
        };

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

    botonBackground.addEventListener('click', function() {
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
