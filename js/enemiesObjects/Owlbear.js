function createOwlbear(){
    return new Monstruo("Owlbear", 
        `Los búhos eran bestias monstruosas con cuerpos de oso cubiertos de gruesos pelajes erizados de 
        pelo y plumas, con coloraciones que iban del marrón amarillento al negro parduzco. 
        El pelaje predominaba en el cuerpo, mientras que las plumas eran más comunes en la cabeza, y tenían pieles gruesas. 
        Sus cabezas eran aviares, como las de los búhos, con ojos grandes y redondos con pupilas límpidas y bordeadas de rojo.`,
        "",
        ""
    )
}


class Monstruo{
    constructor(nombre, desc, img, id){
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagen = img;
        this.id = id;
    }
}
