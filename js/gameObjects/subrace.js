function createElfSubclass() {
    let HighElf = new Subrace("HighElf",
                               30,
                              "Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave."
    )

    let WoodElf = new Subrace("WoodElf",
                                            35,
                                            "These elves spend their reclusive lives in Faerûn's forests. Decades of training in archery and camouflage are enhanced by an otherworldly swiftness"
    )

    return [HighElf, WoodElf];
}

function createDrowSubclass(drowSpeed) {
    let lolthSwornDrow = new Subrace("Lolth-Sworn Drow",
                                            drowSpeed,
                                       "Raised by Lolth's cult in the city of Menzoberranzan, these drow embody the virtues of their corrupt and merciless goddess. Lolth marks Her followers with bright red eyes so those in the Underdark will learn to fear them on sight."
    )

    let seldarineDrow = new Subrace("Seldarine Drow",
                                                    drowSpeed,
                                                    "Seldarine drow can be found seeking allies from all over Faerûn, aiming to settle their conflict with Lolth - and each other - by any means necessary."
        )

    return [lolthSwornDrow, seldarineDrow];
}

function createHalfElfSubclass(){
    let highHalfElf = new Subrace("High Half-Elf",
                                                30,
                                            "A touch of the Feywild remains in half-elves with this bloodline, and even those untrained in magic possess a hint of wild power."
    )

    let woodHalfElf = new Subrace("Wood Half-Elf",
                                            35,
                                            "Like their wood elf parent, these half-elves have a quickened stride and an eye for stealth. Yet many break away from isolation in Faerûn's forests to explore the rest of the Realms."
    )

    let drowHalfElf = new Subrace("Drow Half-Elf",
                                            30,
                                            "Most half-drow result from liaisons between Seldarine drow and surfacers. While half-drow inherited a few magical gifts, they aren't usually raised in the Underdark."
    )

    return [highHalfElf, woodHalfElf, drowHalfElf];
}

function createHalflingSubrace(halflingSpeed) {
    let lightfootHalfling = new Subrace("Lightfoot Halfling",
                                                    halflingSpeed,
                                                "Stealthy but social, these halflings travel all over Faerûn to make names for themselves."
    )

    let strongheartHalfling = new Subrace("Strongheart Halfling",
                                                    halflingSpeed,
                                                    "Legend has it that dwarven blood gave stronghearts their hardiness. Resistant to poison and wellsprings of endurance, these halflings easily hold their own."
    )

    return [lightfootHalfling, strongheartHalfling];
}

function createDwarfSubrace(dwarfSpeed) {
    let goldDwarf = new Subrace("Gold Dwarf",
                                        dwarfSpeed,
        "These dwarves are known for their confidence and keen intuition. The culture of their Deep Kingdom values family, ritual, and fine craftsmanship."
    )

    let shieldDwarf = new Subrace("Shield Dwarf",
        dwarfSpeed,
        "Great losses in ancient wars against goblins and orcs have led these dwarves to adopt a cynical mindset, but they will endure anything to restore their ancestral homelands."
    )

    let duergar = new Subrace("Duergar",
        dwarfSpeed,
        "Once enslaved by the eldritch mind flayers, duergar adapted to freedom with harsh practicality. Their cold demeanours and gift of stealth are well-known throughout the Underdark.",
    )

    return [goldDwarf, shieldDwarf, duergar];
}

function createGnomeSubrace(gnomeSpeed) {
    let rockGnome = new Subrace("Rock Gnome",
        gnomeSpeed,
        "The most commonly seen gnomes on Faerûn's surface, rock gnomes are named as such for their hardiness and affinity for metal."
    )

    let forestGnome = new Subrace("Forest Gnome",
        gnomeSpeed,
        "Even smaller than their cousins and twice as reclusive, forest gnomes are a rare sight in Faerûn. They master magic and craftsmanship in their distant, idyllic groves."
    )

    let deepGnome = new Subrace("Deep Gnome",
        gnomeSpeed,
        "More guarded than their surface cousins, deep gnomes survive in the Underdark with darkvision and skilful stealth.",
    )

    return [rockGnome, forestGnome, deepGnome];
}

function createTieflingSubrace(tieflingSpeed){
    let asmodeusTiefling = new Subrace("Asmodeus Tiefling",
        tieflingSpeed,
        "Bound to Nessus, the deepest layer of the Hells, these tieflings inherited the ability to wield fire and darkness from the archdevil Asmodeus' infernal bloodline."
    )

    let mephistophelesTiefling = new Subrace("Mephistopheles Tiefling",
        tieflingSpeed,
        "Descended from the archdevil Mephistopheles, these tieflings are gifted with a particular affinity for arcane magic."
    )

    let zarielTiefling = new Subrace("zarielTiefling Tiefling",
        tieflingSpeed,
        "Tieflings from Zariel's bloodline are empowered with martial strength, and can channel searing flame to punish their enemies."
    )

    return [asmodeusTiefling, mephistophelesTiefling, zarielTiefling];
}

function createDragonbornSubrace(dragonbornSpeed) {
    let blackDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons."
    )

    let blueDragonborn = new Subrace("Blue Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the deep sapphire scales and charged, crackling breath of blue dragons."
    )

    let brassDragonborn = new Subrace("Brass Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the burnished ochre hue and flickering, fiery breath of brass dragons."
    )

    let bronzeDragonborn = new Subrace("Bronze Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the shining sepia scales and sparking breath of bronze dragons."
    )

    let copperDragonborn = new Subrace("Copper Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the pink-gold colouration and corrosive breath of copper dragons."
    )

    let goldDragonborn = new Subrace("Gold Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the resplendent shine and roiling, blazing breath of gold dragons."
    )

    let greenDragonborn = new Subrace("Green Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the brilliant emerald aspect and stinking, putrid breath of green dragons."
    )

    let redDragonborn = new Subrace("Red Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the bright scarlet likeness and roiling, burning breath of red dragons."
    )

    let silverDragonborn = new Subrace("Silver Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the glinting shine and scorching cold breath of silver dragons."
    )

    let whiteDragonborn = new Subrace("White Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the snowy aspect and frosty breath of white dragons."
    )

    return [blackDragonborn, blueDragonborn, brassDragonborn, bronzeDragonborn, copperDragonborn, goldDragonborn, greenDragonborn, redDragonborn, silverDragonborn, whiteDragonborn];
}

class Subrace{
    constructor(name, speed, desc, feat, spells) {
        this.name = name;
        this.speed = speed;
        this.desc = desc;
        this.raceFeat = feat;
        this.spellist = spells;
    }
}
