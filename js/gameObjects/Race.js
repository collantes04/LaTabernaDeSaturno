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
    let elf = new Race("Half-Elf", 
    /*Desc*/           "Curious, ambitious, and versatile, half-elves are welcome everywhere, but struggle without a community to call their own.",
    /*Velocidad*/       0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createHalfOrc() {
    let human = new Race("Half-Orc", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
}

function createHalfling() {
    let elf = new Race("Halfling", 
    /*Desc*/           "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    /*Velocidad*/       0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createDwarf() {
    let human = new Race("Dwarf", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
}

function createGnome() {
    let elf = new Race("Gnome", 
    /*Desc*/           "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    /*Velocidad*/       0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createTiefling() {
    let human = new Race("Tiefling", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
}

function createGithyanki() {
    let elf = new Race("Githyanki", 
    /*Desc*/           "With ethereal countenances and long lifespans, elves are at home with nature's power, flourishing in light and dark alike.",
    /*Velocidad*/       0, 
    /*Subrazas*/        null, 
    /*Proficiencies*/   null);
}

function createDragonborn() {
    let human = new Race("Dragonborn", 
    /*Desc*/             "The most common face in Faerûn, humans are known for their tenacity, creativity, and endless capacity for growth.",
    /*Velocidad*/         30, 
    /*Subrazas*/          null, 
    /*Proficiencies*/     null);
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