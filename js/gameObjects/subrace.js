function createElfSubclass(params) {
    let HighElf = new Subrace("HighElf",
                               
    )
}

class Subrace extends Race{
    constructor(name, desc, feat, spells) {
        this.name = name;
        this.desc = desc;
        this.raceFeat = feat;
        this.spellist = spells;
    }
}