class Monstruo{
    static id = 0;
    
    constructor(nombre, desc, img){
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagen = img;
        this.id = Monstruo.id++;
    }

    getNombre(){
        return this.nombre;
    }

    getImg(){
        return this.imagen;
    }

    getDesc(){
        return this.descripcion;
    }

    getId(){
        return this.id;
    }
}