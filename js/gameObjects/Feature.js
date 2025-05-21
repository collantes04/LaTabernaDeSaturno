class Feature{
    constructor(name, desc,img) {
        this.name = name;
        this.desc = desc;
        this.img = img;
    }

    get FeatNombre() {
        return this.name;
    }

    get FeatDesc() {
        return this.desc;
    }

    get FeatImg() {
        return this.img;
    }
}
let faeAncestry = new Feature("Ascendencia de las hadas", "Ventaja contra ser encantado e inmune a dormir magico", "../recursos/features/144px-Fey_Ancestry_Icon.webp.png");

let darkVision = new Feature("Visión nocturna", "Puedes ver en la oscuridad hasta 40 pies", "../recursos/features/144px-Darkvision_Icon.webp.png");

function createHumanFeat() {
    return [new Feature("Versatilidad Humana", "Capacidad de cargar aumenta un 25%", "../recursos/features/25px-Generic_Tactical_Icon.webp.png")];
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
    return [darkVision, new Feature("Ataques Salvajes", "Añade un dado de daño adicional cuando haces un ataque crítico con arma cuerpo a cuerpo", "../recursos/features/144px-Savage_Attacks_Icon.webp.png"), new Feature("Resistencia Implacable", "Baja a 1 punto de vida en vez de ser tumbado, una vez por descanso largo", "../recursos/features/144px-Relentless_Endurance_Icon.webp.png")];
}

function createHalflingFeat() {
    return [new Feature("Suerte de Mediano", "Tira los dados en un fallo crítico en ataque, abilidad o saving throw", "../recursos/features/144px-Halfling_Luck_Icon.webp.png"), new Feature("Valiente", "Ventaja contra ser aterrorizado", "../recursos/features/144px-Brave_Icon.webp.png")];
}

function createDwarfFeat() {
    return [new Feature("Resistencia de Enano", "Ventaja contra ser envenenado y resistencia a daño de veneno", "../recursos/features/144px-Dwarven_Resilience_Icon.webp.png"), darkVision];
}

function createGnomeFeat() {
    return [new Feature("Gnomo Astuto", "Ventaja en tiradas de inteligencia, sabiduría y carisma", "../recursos/features/144px-Gnome_Cunning_Icon.webp.png"), darkVision];
}

function createTieflingFeat() {
    return [new Feature("Resistencia Infernal", "Resistencia a daño de fuego", "../recursos/features/144px-Hellish_Resistance_Icon.webp.png"), darkVision];
}

function createGithyankiFeat() {
    return [new Feature("Conocimiento Astral", "Gana proficiencia en todas las habilidades de un tipo despues de un descanso largo", "../recursos/features/144px-Astral_Knowledge_Icon.webp.png"), new Feature("Psiónicos Githyanki", "Mano magica, Salto aumentado y paso rápido", "../recursos/iconsSpell/380px-Enhance_Leap.webp.png")];
}

