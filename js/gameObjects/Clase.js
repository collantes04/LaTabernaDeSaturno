function bardo(){
    return new Clase("Bardo", "", "", )
}


class Clase{

    constructor(nombre, desc, imagen) {
        this.nombre = nombre;
        this.desc  = desc;
        //this.hechizo = new Hechizo();
        //this.subclase = new Subclass();
        //this.talento = new Talento();
        this.imagen = imagen;
    }

    getNombre() {
        return this.nombre;
    }

    getDescripcion(){
        return this.desc;
    }

    getImagen(){
        return this.imagen;
    }
}

