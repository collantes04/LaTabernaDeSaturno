document.addEventListener('DOMContentLoaded', function() {
    const botonRace = document.getElementById('mostrarRace');
    const mainscreen = document.getElementById('mainscreen');

    botonRace.addEventListener('click', function() {
        // Limpiar cualquier contenido anterior de mainscreen
        mainscreen.innerHTML = '';

        mainscreen.style.backgroundColor = 'blue';

    });
});
