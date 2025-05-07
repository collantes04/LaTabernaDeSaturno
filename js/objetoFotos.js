fetch('./recursos/fotos.json')
        .then(res => res.json())
        .then(data => {
            let select = document.getElementById('inputClassLevel');
            let resultado = document.getElementById('imagenClase'); /*Cambiar al div que releja la imagen*/

            select.addEventListener('change', () => {
            let idSeleccionado = select.options[select.selectedIndex].id;
            let imagen = data.imagenes.find(img => img.id === idSeleccionado);

            try {
                resultado.innerHTML = `
                <img src="${imagen.url}" style="max-width: 192px;">`;
            } catch (error) {
                resultado.innerHTML = '<p>ExceptionNoImage: Imagen no encontrada.</p>';
            }
            });
        })
        .catch(err => console.log('Error al cargar el JSON:', err));

        /*Carga el JSON de las fotos e itera con un foreach sobre los array buscando primero el id de la opcion
        y comparándolo con el id de la foto, haciendo que se construya una etiqueta img dentro del div
        seleccionado en resultado, algo no muy difícil. Luego el trycatch evalua si se ha encontrado la foto
        y si no tira una excepción donde te dice que no existe la imagen. Lo mismo con el fetch si hay un
        error en el JSON muestra en un console log la alerta del error.*/