function createHuman() {
    let human = new Race("Human", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
}

function createElf() {
    let elf = new Race("Elf", 
    /*Desc*/           "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    /*Velocidad*/       0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createDrow() {
    let drow = new Race("Drow", 
    /*Desc*/            "Driven to the Underdark, most drow have adopted a ruthless pragmatism. While the Lolth-sworn delight in the goddess' evil tenets, the Seldarine reject Her attempt to overthrow the leader of the elven pantheon.",
    /*Velocidad*/        30, 
    /*Subrazas*/         null, 
    /*Proficiencies*/    null);
}

function createHalfElf() {
    let halfElf = new Race("Half-Elf", 
    /*Desc*/               "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own.",
    /*Velocidad*/           0, 
    /*Subrazas*/            null, 
    /*Proficiencies*/       null);
}

function createHalfOrc() {
    let halfOrc = new Race("Half-Orc", 
    /*Desc*/               "Creatures of intense emotion, half-orcs are more inclined to act than contemplate - whether the rage burning their bodies compels them to fight, or the love filling their hearts inspires acts of incredible kindness.",
    /*Velocidad*/           30, 
    /*Subrazas*/            null, 
    /*Proficiencies*/       null);
}

function createHalfling() {
    let halfling = new Race("Halfling", 
    /*Desc*/                "Small yet capable, halflings prefer the comforts of home and hearth - but their natural luck and dexterity makes them fine adventurers.",
    /*Velocidad*/            25, 
    /*Subrazas*/             null, 
    /*Proficiencies*/        null);
}

function createDwarf() {
    let dwarf = new Race("Dwarf", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         25, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
}

function createGnome() {
    let gnome = new Race("Gnome", 
    /*Desc*/             "As durable and unyielding as their homes of stone, dwarves are some of the finest warriors, miners, and smiths of Faerûn.",
    /*Velocidad*/         0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createTiefling() {
    let tiefling = new Race("Tiefling", 
    /*Desc*/                "Descended from devils of the Nine Hells, tieflings face constant suspicion in Faerûn. Thankfully, their arcane abilities make them natural survivors.",
    /*Velocidad*/            30, 
    /*Subrazas*/             null, 
    /*Proficiencies*/        null);
}

function createGithyanki() {
    let githyanki = new Race("Githyanki", 
    /*Desc*/                 "With a ruthlessness borne from mind flayer enslavement, githyanki ride the Astral Sea atop red dragons, bringing their silver swords and psionic might to bear against any trace of the illithid menace.",
    /*Velocidad*/             0, 
    /*Subrazas*/              null, 
    /*Proficiencies*/         null);
}

function createDragonborn() {
    let dragonborn = new Race("Dragonborn", 
    /*Desc*/                  "A proud race that values clan and skills above all else. Once enslaved by dragons, they strive to be self-sufficient, not wanting to be beholden to anyone, not even the gods.",
    /*Velocidad*/              30, 
    /*Subrazas*/               null, 
    /*Proficiencies*/          null);
}

function createRaza{
    createHuman();
    createElf();
}

class Race {
    constructor(name, desc, speed, subraces, proficiencies) {
        this.name = name;
        this.desc = desc;
        this.speed = speed;
        this.subrace = subraces;
        this.proficiencies = Proficiency;
    }
}