function createVecna(){
    return new Jefe("Vecna",
        `Vecna ​​es un antagonista recurrente en DnD. Nacido como un pobre humano ordinario de la clase intocable, logró convertirse en el mago más exitoso de todos los tiempos. Finalmente, realizó un ritual mágico que le permitió ascender a la divinidad, pero Kas, su lugarteniente de mayor confianza, lo traicionó y le costó un ojo y una mano normales, que se convirtieron en artefactos mágicos. Intentó doblegar todo el multiverso a su voluntad usando la ciudad del sigilo, gobernada por la Dama del Dolor, pero finalmente fue derrotado por una combinación de ella y personajes jugables. Sin embargo, sobrevivió incluso después de que ella restableció por completo el multiverso, y Vecna ​​ha continuado con planes malvados para dominarlo.`,
        "/recursos/enemiesImg/vecna2.png",
        new Stats(14+"(+2)", 16+"(+3)", 18+"(+4)", 22+"(+6)", 24+"(+7)", 16+"(+3)")
    );

}

function createTiamat(){
    return new Jefe("Tiamat",
        `Tiamat es la reina de cinco cabezas de los dragones cromáticos malvados. Ella tiene una cabeza para cada uno de los colores más comunes de dragón cromático (negro, azul, verde, rojo, blanco), y cada cabeza tiene los poderes de un miembro de la raza respectiva de los dragones. El color de cada cabeza continúa por la espalda y los lados, con el tiempo la mezcla en tres franjas de color gris, azul-verde, y púrpura a lo largo de sus cuartos traseros, convirtiéndose en marrón oscuro en su cola. Su bajo vientre y las piernas rechonchas son mezcla blanco verdoso en los colores en los costados y la parte posterior. Su grasa, cuerpo hinchado es una mezcla de varias formas de dragones cromáticos con una piel adecuada multicolor. Su cola se inclina con un aguijón venenoso como la de un wyvern. `,
        "/recursos/enemiesImg/tiamat.png",
        new Stats(30+"(+10)", 10+"(+0)", 30+"(+10)", 26+"(+8)", 26+"(+8)", 28+"(+9)")
    );
}

function createDemogorgon(){
    return new Jefe("Demogorgon",
        `Demogorgon es un poderoso señor demonio y una deidad menor del Abismo. Es conocido por la mayoría como el Príncipe de los Demonios, y algunos señores de Helm lo llaman el Encarcelado, y Leegooggoogoon el "Padre Profundo" por algunos kuo-toa. El autoproclamado título de Príncipe de los Demonios lo ganó en virtud del poder y la influencia; muchos demonios lo desafiaron, pero ninguno pudo derrotar a Demogorgon y reclamarlo.`,
        "/recursos/enemiesImg/demogorgon.png",
        new Stats(29+"(+9)", 14+"(+2)", 26+"(+8)", 20+"(+5)", 17+"(+3)", 25+"(+7)")
    );
}

function createTam(){
    return new Jefe("Szass Tam",
        `Szass Tam es un poderoso liche y miembro de un grupo de ocho Zulkirs que gobiernan el país de Thay. Los Zulkir son archimagos que representan cada una de las ocho escuelas de magia que dirigen a los Magos Rojos de Thay. Tam es el Zulkir de la Nigromancia y comanda la Legión de Hueso, una enorme legión de soldados no muertos, liderada por sus generales vampiros y liches. Szass Tam es el gobernante de Thaymount.`,
        "/recursos/enemiesImg/szass.png",
        new Stats(11+"(+0)", 18+"(+4)", 20+"(+5)", 22+"(+6)", 20+"(+5)", 20+"(+5)")
    );
}

function createAcererak(){
    return new Jefe("Acererak",
        `Acererak viajaba por el multiverso en busca de artefactos, que le gustaba encerrar en mazmorras plagadas de trampas para ver sufrir y morir a los aventureros. Luego disfrutaba atrapando sus almas en su filacteria, cuya ubicación era desconocida.

        A pesar de haber tenido el poder y las oportunidades de ascender a la divinidad, Acererak no tenía ningún interés en ser adorado, a pesar de tener su cuota de seguidores cuyo sufrimiento disfrutaba viendo.`,
        "/recursos/enemiesImg/acerak.png",
        new Stats(13+"(+1)", 16+"(+3)", 20+"(+5)", 27+"(+8)", 21+"(+5)", 20+"(+5)")
    );
}