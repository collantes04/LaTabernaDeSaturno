document.addEventListener('DOMContentLoaded', function (){

        /*Este script itera por el vector y segun los botones que se clicken
        añade 1 mas al indice y muestra esa imagen */
        const adelante = document.getElementById("delante");
        const atras = document.getElementById("atras");
        const imagen = document.getElementById("imagenDnD");
        const descripcion = document.getElementById("descripcionImg");

        /*Vectores con los datos, al manejar solo 2 tipos de datos, un json es innecesario */
        let vectorImagen = ["recursos/dnd-adventurers-header-image.png", "recursos/dd-vecna-eve-of-ruin-art-slideshow_133b.png", 
            "recursos/jordan-kerbow-holysmiteshow1.png", "recursos/mimic-Cropped.png", "recursos/Magic-DnD.png",
            "recursos/ez7sbz8kj4o71.png", "recursos/dnd_owlbear.png", "recursos/Mind_flayer-1-750x348.png",
            "recursos/rogue-dnd-5e.jpg", "recursos/DnD-Bard-By-Zoltan-Boros.png"
        ];
        let vectorDescripciones = ["Héroes de D&D", "Artwork de Vecna", "Artwork de paladín", "Artwork del mimic",
            "Artwork del mago", "Artwork del Demogorgon", "Artwork del Owlbear", "Artwork Mindfayer ]Azotamentes]",
            "Artork del pícaro", "Artwork del Bardo"
        ];

        let i = 0;


        /*Excepcion de control de posiciones vacias */
        function excepcionVacio(){
            this.mensaje = "Posición vacía no hay imagen ni foto";
            this.nombre = "excepcionPosicionVacia";

            function mensaje(){
                return this.mensaje;
            }

            /*Declaramos el cuerpo y comportamiento de la excepcion, mensaje que tira etc*/
        }

        /*Funcion que actualiza la imagen y descripcion actualizando las etiquetas que lo contienen*/
        function actualizarImagen(){

            /*Usamos try_catch para asegurarnos que no mostramos nunca una posicion vacia,
            en su lugar saldrá un mensaje de error, es decir la excepcion*/
            try {

                if(vectorImagen[i] == "" || vectorDescripciones[i] == ""){
                    throw new excepcionVacio();
                } else {
                    imagen.src = vectorImagen[i];
                    descripcion.textContent =  vectorDescripciones[i];
                }
                
            } catch (excepcionVacio) {
                imagen.src = ""
                descripcion.textContent = "ERROR: Posción vacía";
            }
            
        }


        /*Comportamiento de los botones de avance y retroceso de imagenes */
        adelante.addEventListener('click', () => {
            i++;
            if (i >= vectorImagen.length){
                i = 0;
            }
            actualizarImagen();

        })

        atras.addEventListener('click', () => {
            i--;
            if (i >= vectorImagen.length){
                i = 0;
            } else if (i == -1){
                i = vectorImagen.length - 1;
            }
            actualizarImagen();
        })
    });  