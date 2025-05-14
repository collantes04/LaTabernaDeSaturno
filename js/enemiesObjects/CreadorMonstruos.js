function createOwlbear(){
    return new Monstruo("Owlbear", 
        `Los búhos eran bestias monstruosas con cuerpos de oso cubiertos de gruesos pelajes erizados de 
        pelo y plumas, con coloraciones que iban del marrón amarillento al negro parduzco. 
        El pelaje predominaba en el cuerpo, mientras que las plumas eran más comunes en la cabeza, y tenían pieles gruesas. 
        Sus cabezas eran aviares, como las de los búhos, con ojos grandes y redondos con pupilas límpidas y bordeadas de rojo.`,
        "recursos/enemiesImg/owlbear.png"
    );
}

function createOrco(){
    return new Monstruo("Orco",
        `Los orcos variaban en apariencia basados en 
        región y sub-raza, pero todos compartían ciertas 
        características. La mayoría tenía piel grisacea, 
        cabello grueso, espaldas encorvadas, frentes bajas, 
        cuerpos musculosos y rostros porcinos con colmillos 
        similares a los de un jabalí. 
        Algunos tenían orejas de lobo que terminaban en punta, 
        similares a los elfos. Los orcos eran de estatura similar
        a los humanos, aunque eran más robustos.`,
        "recursos/enemiesImg/orco.png"
    );
}

function createSlime(){
    return new Monstruo("Slime",
        `Uno de los más extraños depredadores existentes, el Cubo Gelatinoso pasa su existencia rondando por 
        las salas y pasillos de cavernas, calabozos y cañerías, tragando y digiriendo material 
        orgánico como plantas, basura, e incluso seres vivos. La piedra y el metal son inmunes a su toque corrosivo, por 
        lo que a menudo quedan dentro del cubo hasta que este los excreta, dejando mientras tanto una impresión fantasmal de la criatura que los portaba. 
        El contacto con su exterior podría provocar una descarga eléctrica paralizante, después 
        de lo cual los cubos proceden a digerir lentamente a su presa aturdida e indefensa.`,
        "recursos/enemiesImg/slime.png",
    );

}