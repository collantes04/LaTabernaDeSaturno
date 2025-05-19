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

function createAzotamentes(){
    return new Monstruo("Azotamentes",
        `Los Azotamentes pasan mucho de su tiempo en un intenso estudio, experimentación, y la recopilación de conocimientos de todo tipo que les permitan reconquistar finalmente el universo y mantenerlo bajo su control para siempre. Con frecuencia se inmiscuyen en la política de otras razas a través de la manipulación psíquica sutil de figuras relevantes ó personalidades de alto cargo, para no causar caos, pero a fin de comprender mejor las dinámicas para regir diversos aspectos de la civilización. Ellos investigan regularmente la mente de los habitantes de la superficie a fin de reunir información y aprender sobre los nuevos avances en la magia y la tecnología. Los Azotamentes también suelen realizar una buena cantidad de investigación en sí mismos, se centran principalmente en el desarrollo de nuevos poderes psíquicos, de control y sujestión mental.`,
        "/recursos/enemiesImg/azotamentes.png",
        new Stats(11+"(+0)", 12+"(+1)", 12+"(+1)", 19+"(+4)", 17+"(+3)", 17+"(+3)")
    );
}

function createManticora(){
    return new Monstruo("Manticora",
        `Esta criatura es monstruosa en todos los sentidos de la palabra; Tiene cabeza de una bestia vagamente humanoide, el cuerpo de un león y las alas de un dragón. La espalda de la criatura tiene espinas curvadas, y su larga cola termina en un amasijo de púas mortíferas.
        Las manticoras son feroces monstruos a los que les gusta cazar criaturas vivas. Son astutas y malvadas y tienen mentes agudas y logicas. Esta criatura puede ser un enemigo mortal o un poderoso aliado.`,
        "/recursos/enemiesImg/manticora.png",
        new Stats(17+"(+3)", 16+"(+3)", 17+"(+3)", 7+"(-2)", 12+"(+1)", 8+"(-1)")
    );
}

function createQuimera(){
    return new Monstruo("Quimera",
        `La quimera es un ser monstruoso de origen oscuro, híbrido entre un león, un macho cabrío y un dragón.
        La parte delantera es la de un león de color tostado y de gran tamaño. La parte posterior es la de un enorme macho cabrío de color negro. Tiene también unas gigantescas alas de dragón, que suelen ser negras o rojas. Tiene 3 cabezas; una de dragón, otra de león y la tercera de macho cabrío con cuernos.
        Tiene características de los seres de los que está compuesta.`,
        "/recursos/enemiesImg/quimera.png",
        new Stats(19+"(+4)", 11+"(+0)", 19+"(+4)", 3+"(-4)", 14+"(+2)", 10+"(+0)")
    );
}

