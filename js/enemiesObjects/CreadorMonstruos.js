function createOwlbear(){
    return new Monstruo("Owlbear", 
        `Los búhos eran bestias monstruosas con cuerpos de oso cubiertos de gruesos pelajes erizados de 
        pelo y plumas, con coloraciones que iban del marrón amarillento al negro parduzco. 
        El pelaje predominaba en el cuerpo, mientras que las plumas eran más comunes en la cabeza, y tenían pieles gruesas. 
        Sus cabezas eran aviares, como las de los búhos, con ojos grandes y redondos con pupilas límpidas y bordeadas de rojo.`,
        "/recursos/enemiesImg/owlbear.png",
        new Stats(14+"(+2)", 3+"(-4)", 20+"(+5)", 1+"(-5)", 6+"(-2)", 1+"(-5)")
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
        "/recursos/enemiesImg/orco.png",
        new Stats(16+"(+3)", 12+"(+1)", 12+"(+3)", 7+"(-2)", 11+"(+0)", 10+"(+0)")
    );
}

function createCGelatinoso(){
    return new Monstruo("Cubo Gelatinoso",
        `Uno de los más extraños depredadores existentes, el Cubo Gelatinoso pasa su existencia rondando por 
        las salas y pasillos de cavernas, calabozos y cañerías, tragando y digiriendo material 
        orgánico como plantas, basura, e incluso seres vivos. La piedra y el metal son inmunes a su toque corrosivo, por 
        lo que a menudo quedan dentro del cubo hasta que este los excreta, dejando mientras tanto una impresión fantasmal de la criatura que los portaba. 
        El contacto con su exterior podría provocar una descarga eléctrica paralizante, después 
        de lo cual los cubos proceden a digerir lentamente a su presa aturdida e indefensa.`,
        "/recursos/enemiesImg/slime.png",
        new Stats(14+"(+2)", 3+"(-4)", 20+"(+5)", 1+"(-5)", 6+"(-2)", 1+"(-5)")
    );

}

function createGoblin(){
    return new Monstruo("Goblin",
        `Los goblins son pequeños humanoides, egoístas y de negro corazón, que habitan en cavernas, minas 
        abandonadas, mazmorras saqueadas y otros lugares lúgubres. Dado que son individualmente débiles, 
        se reúnen en grandes grupos, de un tamaño que llega a ser apabullante. Ansían el poder y abusan 
        constantemente de cualquier migaja de autoridad que consigan.`,
        "/recursos/enemiesImg/goblin.png",
        new Stats(8+"(-1)", 14+"(+12)", 10+"(+0)", 10+"(+0)", 8+"(-1)", 8+"(-1)")
    );
}

function createZombie(){
    return new Monstruo("Zombie",
        `Los zombies son muertos vivientes reanimados, sin voluntad propia. 
        Se mueven lentamente y atacan por instinto, buscando carne fresca. Son resistentes y no sienten dolor, 
        pero son torpes y carecen de inteligencia. Pueden ser destruidos con fuego, daño contundente o al destruir su cerebro. Aunque no sanan como los seres vivos, siguen siendo una amenaza debido a su capacidad para atacar en grandes números, pero son vulnerables a tácticas que exploten su lentitud y falta de astucia.`,
        "/recursos/enemiesImg/zombi.png",
        new Stats(13+"(+1)", 6+"(-2)", 16+"(+13)", 3+"(-4)", 6+"(-2)", 5+"(-3)")
    );
}