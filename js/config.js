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

        mainscreen.style.backgroundColor = 'orange';
    
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
                    <button id="botonClases"  type="button" onclick="seleccionarClase(${i})">
                        <img src="${iconRaces[i]}" alt="${Races[i]}" />
                        <div class="textoClases">${Races[i]}</div>
                    </button>
                </div>
            `;
        }
        html += `</div>`;
        mainscreen.innerHTML += html; 
    
        const infoPersonaje = document.getElementById('infoPersonaje');
        infoPersonaje.innerHTML = ""
        function seleccionarClase(index) {
            const info = raceInfo[index];
            infoPersonaje.textContent = `Has seleccionado: ${Races[index]}. ${info}`;

        }

    });

    botonSubrace.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'black';
    });
    
    botonClass.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'green';

    });

    botonBackground.addEventListener('click', function() {
        mainscreen.innerHTML = '';
    
       
    });
    

    botonAbilities.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'white';

    });
});
