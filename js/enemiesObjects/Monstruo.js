class Monstruo{
    static id = 0;
    
    constructor(nombre, desc, img, Stats){
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagen = img;
        this.id = Monstruo.id++;
        this.stats = Stats;
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
    getStats(){
        return this.stats.fuerza + "<br><br>" +
        this.stats.destreza + "<br><br>" +
        this.stats.constitucion + "<br> <br>" +
        this.stats.inteligencia + "<br> <br>" +
        this.stats.sabiduria + "<br> <br>" +
        this.stats.carisma;
    }
}