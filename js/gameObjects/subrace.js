function createElfSubclass(params) {
    let HighElf = new Subrace("HighElf",
                               30,
                              "Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave.",
                                
    )
}

class Subrace extends Race{
    constructor(name, speed, desc, feat, spells) {
        this.name = name;
        this.speed = speed;
        this.desc = desc;
        this.raceFeat = feat;
        this.spellist = spells;
    }
}