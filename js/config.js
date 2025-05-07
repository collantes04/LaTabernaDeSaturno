document.addEventListener('DOMContentLoaded', function () {
    const race = document.getElementById('race');
    const seccion2 = document.getElementById('seccion2');
    const irASeccion2 = document.getElementById('irASeccion2');
    const volverASeccion1 = document.getElementById('volverASeccion1');

    // Mostrar la sección 1 inicialmente
    race.style.display = 'block';  // Esto hace visible la sección 1

    // Evento para ir a la sección 2
    irASeccion2.addEventListener('click', function () {
      seccion1.style.display = 'none';  // Ocultar la sección 1
      seccion2.style.display = 'block'; // Mostrar la sección 2
    });

    // Evento para volver a la sección 1
    volverASeccion1.addEventListener('click', function () {
      seccion2.style.display = 'none';  // Ocultar la sección 2
      seccion1.style.display = 'block'; // Mostrar la sección 1
    });
  });