function createHuman() {
    const human = new Race("Human", 
    /*Desc*/             "La cara más común en Faerûn, los humanos son conocidos por su tenacidad, creatividad y capacidad interminable de crecimiento.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     [new Weapon("Lanzas"),
                            new Weapon("Picas"),
                            new Weapon("Alabarda"),
                            new Weapon("Guja"),
                            new Armor("Light Armour"),
                            new Armor("Shields")],
    /*Imagen*/             "../recursos/iconsRace/Race_Human.png",
    /*Features*/           createHumanFeat()
    );
    return human;
}

function createElf() {
    const elf = new Race("Elf", 
    /*Desc*/           "Con las cargos etéreas y la larga vida útil, los elfos están en casa con el poder de la naturaleza, floreciendo en luz y oscuro por igual.",
    /*Velocidad*/       0, 
    /*Subrazas*/        createElfSubclass(),
    /*Proficiencies*/   [new Weapon("Espada Corta"),
                                    new Weapon("Espada Larga"),
                                    new Weapon("Arco Recurvo"),
                                    new Weapon("Longbow"),
                                    new SvThrow("Percepción")],
    /*Imagen*/         "../recursos/iconsRace/Race_Elf.png",
    /*Features*/       createElfFeat()
    );
    return elf;
}

function createDrow() {
    const drow = new Race("Drow", 
    /*Desc*/            "Impulsado al Underdark, la mayoría de los drow han adoptado un despiadado pragmatismo.Mientras que el deleite de Lolth en los principios malvados de la Diosa, los Seldarine rechazan su intento de derrocar al líder del Panteón Elven.",
    /*Velocidad*/        30, 
    /*Subrazas*/         createDrowSubclass(30),
    /*Proficiencies*/    [new Weapon("Estoque"),
                                    new Weapon("Espada Corta"),
                                    new Weapon("Ballesta de Mano"),
                                    new SvThrow("Percepción")],
    /*Imagen*/          "../recursos/iconsRace/Race_Drow.png",
    /*Features*/        createDrowFeat()
    );
    return drow;
}

function createHalfElf() {
    const halfElf = new Race("Half-Elf", 
    /*Desc*/               "Curiosos, ambiciosos y versátiles, medios, son bienvenidos en todas partes, pero luchan sin una comunidad para llamar a la suya.",
    /*Velocidad*/           0, 
    /*Subrazas*/            createHalfElfSubclass(),
    /*Proficiencies*/       [new Weapon("Lanzas"),
                                        new Weapon("Picas"),
                                        new Weapon("Alabarda"),
                                        new Weapon("Guja"),
                                        new Armor("Light Armour"),
                                        new Armor("Shields")],
    /*Imagen*/              "../recursos/iconsRace/Race_Half-Elf.png",
    /*Features*/            createHalfElfFeat()
    );
    return halfElf;
}

function createHalfOrc() {
    const halfOrc = new Race("Half-Orc", 
    /*Desc*/               "Las criaturas de emociones intensas, las medias órgidas están más inclinadas a actuar que contemplar, ya sea que la ira quema sus cuerpos los obliga a luchar, o el amor que llena sus corazones inspira actos de increíble amabilidad.",
    /*Velocidad*/           30, 
    /*Subrazas*/            null, 
    /*Proficiencies*/       [new SvThrow("Intimidación")],
    /*Imagen*/              "../recursos/iconsRace/Race_Half-Orc.png",
    /*Features*/            createHalfOrcFeat()
    );
    return halfOrc;
}

function createHalfling() {
    const halfling = new Race("Halfling", 
    /*Desc*/                "Pequeños pero capaces, los medianos prefieren las comodidades del hogar y el hogar, pero su suerte y destreza natural los convierte en buenos aventureros.",
    /*Velocidad*/            25, 
    /*Subrazas*/             createHalflingSubrace(25),
    /*Proficiencies*/        null,
    /*Imagen*/               "../recursos/iconsRace/Race_Halfling.png",
    /*Features*/             createHalflingFeat()
    );
    return halfling;
}

function createDwarf() {
    const dwarf = new Race("Dwarf", 
    /*Desc*/             "La cara más común en Faerûn, los humanos son conocidos por su tenacidad, creatividad y capacidad interminable de crecimiento.",
    /*Velocidad*/         25, 
    /*Subrazas*/          createDwarfSubrace(25),
    /*Proficiencies*/     [new Weapon("Hacha de Guerra"),
                            new Weapon("Hacha de Mano"),
                            new Weapon("Martillo ligero"),
                            new Weapon("Martillo de guerra")],
    /*Imagen*/             "../recursos/iconsRace/Race_Dwarf.png",
    /*Features*/           createDwarfFeat()
    );
    return dwarf;
}

function createGnome() {
    const gnome = new Race("Gnome", 
    /*Desc*/              "Tan duraderos e inquebrantables como sus casas de piedra, los enanos son algunos de los mejores guerreros, mineros y Smiths of Faerûn.",
    /*Velocidad*/         0, 
    /*Subrazas*/          createGnomeSubrace(25),
    /*Proficiencies*/     null,
    /*Imagen*/            "../recursos/iconsRace/Race_Gnome.png",
    /*Features*/          createGnomeFeat()
    )
    return gnome;
}

function createTiefling() {
    const tiefling = new Race("Tiefling", 
    /*Desc*/                "Descendiendo de los demonios de los nueve infiernos, los Tieflings enfrentan una sospecha constante en Faerûn.Afortunadamente, sus habilidades arcanas los convierten en sobrevivientes naturales.",
    /*Velocidad*/            30, 
    /*Subrazas*/             createTieflingSubrace(30),
    /*Proficiencies*/        null,
    /*Imagen*/               "../recursos/iconsRace/Race_Tiefling.png",
    /*Features*/             createTieflingFeat()
    );
    return tiefling;
}

function createGithyanki() {
    const githyanki = new Race("Githyanki",
    /*Desc*/                 "Con una crueldad de esclavitud del desinterés mental, Githyanki viaja en el Mar Astral sobre los dragones rojos, trayendo sus espadas plateadas y su poderoso poder para soportar cualquier rastro de la amenaza de Illithid.",
    /*Velocidad*/             0,
    /*Subrazas*/              null,
    /*Proficiencies*/         [new Weapon("Espada Corta"),
                                          new Weapon("Espada Larga"),
                                          new Weapon("Mandoble"),
                                          new Armor("Armadura ligera"),
                                          new Armor("Armadura Media")],
    /*Imagen*/                "../recursos/iconsRace/Race_Githyanki.png",
    /*Features*/              createGithyankiFeat()
    );
    return githyanki;
}

function createDragonborn() {
    const dragonborn = new Race("Dragonborn", 
    /*Desc*/                  "Una raza orgullosa que valora el clan y las habilidades por encima de todo.Una vez esclavizados por dragones, se esfuerzan por ser autosuficientes, no queriendo estar en deuda con nadie, ni siquiera con los dioses.",
    /*Velocidad*/              30, 
    /*Subrazas*/               createDragonbornSubrace(30),
    /*Proficiencies*/          null,
    /*Imagen*/                 "../recursos/iconsRace/Race_Dragonborn.png",
    /*Features*/               null
    );
    return dragonborn;
}

function createRaza() {
    let human = createHuman();
    let elf = createElf();
    let drow = createDrow();
    let halfElf = createHalfElf();
    let halfOrc = createHalfOrc();
    let halfling = createHalfling();
    let dwarf = createDwarf();
    let gnome = createGnome();
    let tiefling = createTiefling();
    let githyanki = createGithyanki();
    let dragonborn = createDragonborn();
    return [human, elf, drow, halfElf, halfOrc, halfling, dwarf, gnome, tiefling, githyanki, dragonborn];
}

class Race {
    constructor(name, desc, speed, subraces, proficiencies, image, raceFeat) {
        this._name = name;
        this._desc = desc;
        this._speed = speed;
        this._subraces = subraces;
        this._proficiencies = proficiencies;
        this._image = image;
        this._raceFeat = raceFeat;
    }


    get raceName() {
        return this._name;
    }
    get raceFeat(){
        return this._raceFeat;
    }

    get raceDesc() {
        return this._desc;
    }

    get raceSpeed() {
        return this._speed;
    }

    get raceSubraces() {
        return this._subraces;
    }

    get raceProficiencies() {
        return this._proficiencies;
    }

    get raceImage() {
        return this._image;
    }
}