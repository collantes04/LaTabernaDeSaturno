function createElfSubclass() {
    let HighElf = new Subrace("HighElf",
                               30,
                              "Heirs of the mystical Feywild, high elves value magic in all its forms, and even those who do not study spellcraft can manipulate the Weave.",
                                null,
                                null
    )

    let WoodElf = new Subrace("WoodElf",
                                            35,
                                            "These elves spend their reclusive lives in Faerûn's forests. Decades of training in archery and camouflage are enhanced by an otherworldly swiftness",
                                                null,
                                                null
    )
}

function createDrowSubclass(drowSpeed) {
    let lolthSwornDrow = new Subrace("Lolth-Sworn Drow",
                                            drowSpeed,
                                       "Raised by Lolth's cult in the city of Menzoberranzan, these drow embody the virtues of their corrupt and merciless goddess. Lolth marks Her followers with bright red eyes so those in the Underdark will learn to fear them on sight.",
                                             null,
                                             null
    )

    let seldarineDrow = new Subrace("Seldarine Drow",
                                                    drowSpeed,
                                                    "Seldarine drow can be found seeking allies from all over Faerûn, aiming to settle their conflict with Lolth - and each other - by any means necessary.",
                                                    null,
                                                    null
        )
}

function createHalfElfSubclass(){
    let highHalfElf = new Subrace("High Half-Elf",
                                                30,
                                            "A touch of the Feywild remains in half-elves with this bloodline, and even those untrained in magic possess a hint of wild power.",
                                            null,
                                            null
    )

    let woodHalfElf = new Subrace("Wood Half-Elf",
                                            35,
                                            "Like their wood elf parent, these half-elves have a quickened stride and an eye for stealth. Yet many break away from isolation in Faerûn's forests to explore the rest of the Realms.",
                                            null,
                                            null
    )

    let drowHalfElf = new Subrace("Drow Half-Elf",
                                            30,
                                            "Most half-drow result from liaisons between Seldarine drow and surfacers. While half-drow inherited a few magical gifts, they aren't usually raised in the Underdark.",
                                            null,
                                            null
    )
}

function createHalflingSubrace(halflingSpeed) {
    let lightfootHalfling = new Subrace("Lightfoot Halfling",
                                                    halflingSpeed,
                                                "Stealthy but social, these halflings travel all over Faerûn to make names for themselves.",
                                                null,
                                                null
    )

    let strongheartHalfling = new Subrace("Strongheart Halfling",
                                                    halflingSpeed,
                                                    "Legend has it that dwarven blood gave stronghearts their hardiness. Resistant to poison and wellsprings of endurance, these halflings easily hold their own.",
                                                    null,
                                                    null
    )
}

function createDwarfSubrace(dwarfSpeed) {
    let goldDwarf = new Subrace("Gold Dwarf",
                                        dwarfSpeed,
        "These dwarves are known for their confidence and keen intuition. The culture of their Deep Kingdom values family, ritual, and fine craftsmanship.",
        null,
        null
    )

    let shieldDwarf = new Subrace("Shield Dwarf",
        dwarfSpeed,
        "Great losses in ancient wars against goblins and orcs have led these dwarves to adopt a cynical mindset, but they will endure anything to restore their ancestral homelands.",
        null,
        null
    )

    let duergar = new Subrace("Duergar",
        dwarfSpeed,
        "Once enslaved by the eldritch mind flayers, duergar adapted to freedom with harsh practicality. Their cold demeanours and gift of stealth are well-known throughout the Underdark.",
        null,
        null
    )
}

function createGnomeSubrace(gnomeSpeed) {
    let rockGnome = new Subrace("Rock Gnome",
        gnomeSpeed,
        "The most commonly seen gnomes on Faerûn's surface, rock gnomes are named as such for their hardiness and affinity for metal.",
        null,
        null
    )

    let forestGnome = new Subrace("Forest Gnome",
        gnomeSpeed,
        "Even smaller than their cousins and twice as reclusive, forest gnomes are a rare sight in Faerûn. They master magic and craftsmanship in their distant, idyllic groves.",
        null,
        null
    )

    let deepGnome = new Subrace("Deep Gnome",
        gnomeSpeed,
        "More guarded than their surface cousins, deep gnomes survive in the Underdark with darkvision and skilful stealth.",
        null,
        null
    )
}

function createTieflingSubrace(tieflingSpeed){
    let asmodeusTiefling = new Subrace("Asmodeus Tiefling",
        tieflingSpeed,
        "Bound to Nessus, the deepest layer of the Hells, these tieflings inherited the ability to wield fire and darkness from the archdevil Asmodeus' infernal bloodline.",
        null,
        null
    )

    let mephistophelesTiefling = new Subrace("Mephistopheles Tiefling",
        tieflingSpeed,
        "Descended from the archdevil Mephistopheles, these tieflings are gifted with a particular affinity for arcane magic.",
        null,
        null
    )

    let zarielTiefling = new Subrace("zarielTiefling Tiefling",
        tieflingSpeed,
        "Tieflings from Zariel's bloodline are empowered with martial strength, and can channel searing flame to punish their enemies.",
        null,
        null
    )
}

function createDragonbornSubrace(dragonbornSpeed) {
    let blackDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )

    let blueDragonborn = new Subrace("Blue Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the deep sapphire scales and charged, crackling breath of blue dragons.",
        null,
        null
    )

    let brassDragonborn = new Subrace("Brass Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the burnished ochre hue and flickering, fiery breath of brass dragons.",
        null,
        null
    )

    let bronzeDragonborn = new Subrace("Bronze Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the shining sepia scales and sparking breath of bronze dragons.",
        null,
        null
    )

    let goldDragonborn = new Subrace("Gold Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )

    let greenDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )

    let redDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )

    let silverDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )

    let whiteDragonborn = new Subrace("Black Dragonborn",
        dragonbornSpeed,
        "Despite no ancestral links to the mighty creatures, these dragonborn share the charcoal colouration and fizzling, acrid breath of black dragons.",
        null,
        null
    )
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
