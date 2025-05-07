document.addEventListener('DOMContentLoaded', function (){

        /*Este script itera por el vector y segun los botones que se clicken
        añade 1 mas al indice y muestra esa imagen */
        const adelante = document.getElementById("delante");
        const atras = document.getElementById("atras");
        const imagen = document.getElementById("imagenDnD");
        const descripcion = document.getElementById("descripcionImg");


        let vectorImagen = ["recursos/dnd-adventurers-header-image.png", "recursos/dd-vecna-eve-of-ruin-art-slideshow_133b.png"];
        let vectorDescripciones = ["Héroes de D&D", "Artwork de Vecna"];
        let i = 0;

        function actualizarImagen(){
            imagen.src = vectorImagen[i];
            descripcion.textContent =  vectorDescripciones[i];
        }

        adelante.addEventListener('click', () => {

            if (i >= vectorImagen.length-1){
                i = 0;
            } else if(i <= vectorImagen.length-1){
                i = vectorImagen.length - 1;
            } else {
                i++;
            }
            actualizarImagen();

        })

        atras.addEventListener('click', () => {
            
            if (i >= vectorImagen.length-1){
                i = 0;
            } else if (i <= vectorImagen.length-1){
                i = vectorImagen.length - 1;
            } else {
                i--;
            }
            actualizarImagen();
        })
    });
    