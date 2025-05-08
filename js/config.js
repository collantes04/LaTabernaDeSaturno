document.addEventListener('DOMContentLoaded', function() {
    const botonRace = document.getElementById('mostrarRace');
    const botonSubrace = document.getElementById('mostrarSubrace');
    const botonClass = document.getElementById('mostrarClass');
    const botonBackground = document.getElementById('mostrarBackground');
    const botonAbilities = document.getElementById('mostrarAbilities');
    const mainscreen = document.getElementById('mainscreen');
    const botonRaceBarbaro = document.getElementById('')

    botonRace.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'blue';

        document.getElementById("mainscreen").innerHTML = "Hola";


        const Races = ["Bárbaro", "Bardo", "Clérigo", "Druida", "Guerrero", "Monje", "Paladín", "Explorador", "Pícaro", "Hechicero", "Brujo", "Mago"];
        const iconRaces = ["recursos/iconsClass/barbarian.png","recursos/iconsClass/bard.png","recursos/iconsClass/cleric.png","recursos/iconsClass/druid.png",
            "recursos/iconsClass/figther.png","recursos/iconsClass/monk.png","recursos/iconsClass/paladin.png","recursos/iconsClass/ranger.png","recursos/iconsClass/rogue.png",
            "recursos/iconsClass/sorcerer.png","recursos/iconsClass/warlock.png","recursos/iconsClass/wizard.png"
        ];
        for (int i=0;i<Races.length();i++) {
            mainscreen.innerHTML += '<img src = >';
            mainscreen.innerHTML += '<div id="casillaSelectorPersonaje">' + Races[i] + '</div>';

        }
        

    });

    botonSubrace.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'yellow';

    });
    
    botonClass.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'green';

    });

    botonBackground.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'black';

    });

    botonAbilities.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'white';

    });
});
