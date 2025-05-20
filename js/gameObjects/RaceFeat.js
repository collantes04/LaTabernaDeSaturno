let faeAncestry = new RaceFeature("Ascendencia de las hadas", "Ventaja contra ser encantado e inmune a dormir magico", "../recursos/features/FeyAncestry.png");

let darkVision = new RaceFeature("Visión nocturna", "Puedes ver en la oscuridad hasta 40 pies");

function createHumanFeat() {
    return [new RaceFeature("Versatilidad Humana", "Capacidad de cargar aumenta un 25%", "../recursos/features/humanVersatility.png")]
}

function createElfFeat() {
    let elf = [faeAncestry, darkVision];
}

function createDrowFeat() {
    return [faeAncestry];
}

function createHalfElfFeat() {
    return [faeAncestry, darkVision];
}

function createHalfOrcFeat() {
    return [darkVision, new RaceFeature("Ataques Salvajes", "Añade un dado de daño adicional cuando haces un ataque crítico con arma cuerpo a cuerpo", "../recursos/features/SavageAtacks.png"), new RaceFeature("Resistencia Implacable", "Baja a 1 punto de vida en vez de ser tumbado, una vez por descanso largo", "..recursos/features/RelentlessEndurance.png")];
}

function createHalflingFeat() {
    return [new RaceFeature("Suerte de Mediano", "Tira los dados en un fallo crítico en ataque, abilidad o saving throw"),]
}

class RaceFeature{
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
        this.img = img;
    }
}