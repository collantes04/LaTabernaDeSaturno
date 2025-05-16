function createElfSubclass(params) {
    let HighElf = new Subrace("HighElf",
                                 
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