function createHuman() {
    let human = new Race("Human", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     [new Weapon("Lanzas"),
                                      new Weapon("Picas"),
                                      new Weapon("Alabarda"),
                                      new Weapon("Guja"),
                                      new Armor("Light Armour"),
                                      new Armor("Shields")],
                                "../recursos/iconsRace/Race_Human.png"
    );
    return human;
}

function createElf() {
    let elf = new Race("Elf", 
    /*Desc*/           "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    /*Velocidad*/       0, 
    /*Subrazas*/        createElfSubclass(),
    /*Proficiencies*/   [new Weapon("Espada Corta"),
                                    new Weapon("Espada Larga"),
                                    new Weapon("Arco Recurvo"),
                                    new Weapon("Longbow"),
                                    new SvThrow("Percepción")],
                    "../recursos/iconsRace/Race_Elf.png"
    );
    return elf;
}

function createDrow() {
    let drow = new Race("Drow", 
    /*Desc*/            "Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess' evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon.",
    /*Velocidad*/        30, 
    /*Subrazas*/         createDrowSubclass(30),
    /*Proficiencies*/    [new Weapon("Estoque"),
                                    new Weapon("Espada Corta"),
                                    new Weapon("Ballesta de Mano"),
                                    new SvThrow("Percepción")],
                    "../recursos/iconsRace/Race_Drow.png"
    );
    return drow;
}

function createHalfElf() {
    let halfElf = new Race("Half-Elf", 
    /*Desc*/               "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own.",
    /*Velocidad*/           0, 
    /*Subrazas*/            createHalfElfSubclass(),
    /*Proficiencies*/       [new Weapon("Lanzas"),
                                        new Weapon("Picas"),
                                        new Weapon("Alabarda"),
                                        new Weapon("Guja"),
                                        new Armor("Light Armour"),
                                        new Armor("Shields")],
                                  "../recursos/iconsRace/Race_Half-Elf.png"
    );
    return halfElf;
}

function createHalfOrc() {
    let halfOrc = new Race("Half-Orc", 
    /*Desc*/               "Creatures of intense emotion, half-orcs are more inclined to act than contemplate - whether the rage burning their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness.",
    /*Velocidad*/           30, 
    /*Subrazas*/            null, 
    /*Proficiencies*/       [new SvThrow("Intimidación")],
                            "../recursos/iconsRace/Race_Half-Orc.png"
    );
    return halfOrc;
}

function createHalfling() {
    let halfling = new Race("Halfling", 
    /*Desc*/                "Small yet capable, halflings prefer the comforts of home and hearth - but their natural luck and dexterity makes them fine adventurers.",
    /*Velocidad*/            25, 
    /*Subrazas*/             createHalflingSubrace(25),
    /*Proficiencies*/        null,
                            "../recursos/iconsRace/Race_Halfling.png"
    );
    return halfling;
}

function createDwarf() {
    let dwarf = new Race("Dwarf", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         25, 
    /*Subrazas*/          createDwarfSubrace(25),
    /*Proficiencies*/     [new Weapon("Hacha de Guerra"),
                                    new Weapon("Hacha de Mano"),
                                    new Weapon("Martillo ligero"),
                                    new Weapon("Martillo de guerra")],
                          "../recursos/iconsRace/Race_Dwarf.png"
    );
    return dwarf;
}

function createGnome() {
    let gnome = new Race("Gnome", 
    /*Desc*/             "As durable and unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn.",
    /*Velocidad*/         0, 
    /*Subrazas*/        createGnomeSubrace(25),
    /*Proficiencies*/   null,
                        "../recursos/iconsRace/Race_Gnome.png"
    )
    return gnome;
}

function createTiefling() {
    let tiefling = new Race("Tiefling", 
    /*Desc*/                "Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors.",
    /*Velocidad*/            30, 
    /*Subrazas*/             createTieflingSubrace(30),
    /*Proficiencies*/        null,
                              "../recursos/iconsRace/Race_Tiefling.png"
    );
    return tiefling;
}

function createGithyanki() {
    let githyanki = new Race("Githyanki",
    /*Desc*/                 "With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace.",
    /*Velocidad*/             0,
    /*Subrazas*/              null,
    /*Proficiencies*/         [new Weapon("Espada Corta"),
                                          new Weapon("Espada Larga"),
                                          new Weapon("Mandoble"),
                                          new Armor("Armadura ligera"),
                                          new Armor("Armadura Media")],
                               "../recursos/iconsRace/Race_Githyanki.png"
    );
    return githyanki;
}

function createDragonborn() {
    let dragonborn = new Race("Dragonborn", 
    /*Desc*/                  "A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods.",
    /*Velocidad*/              30, 
    /*Subrazas*/               createDragonbornSubrace(30),
    /*Proficiencies*/          null,
                                "../recursos/iconsRace/Race_Dragonborn.png"
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
    constructor(name, desc, speed, subraces, proficiencies, image) {
        this._name = name;
        this._desc = desc;
        this._speed = speed;
        this._subraces = subraces;
        this._proficiencies = proficiencies;
        this._image = image;
    }


    get raceName() {
        return this._name;
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