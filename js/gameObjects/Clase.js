
function createBarbarian() {
    return new Clase("Barbaro", "Guerrero salvaje que canaliza la furia primitiva para desatar una fuerza brutal en combate.",
        "/recursos/iconsClass/barbarian.png", null, null);
}

function createBard() {
    return new Clase("Bardo", "Artista versátil que utiliza magia, música y conocimiento para apoyar al grupo y manipular a sus enemigos.",
        "/recursos/iconsClass/bard.png", bardoSpells(), null);
}

function createClerigo() {
    return new Clase("Clerigo", "Devoto canalizador del poder divino, experto en curación, protección y combate contra lo profano.",
        "/recursos/iconsClass/cleric.png", clerigoSpells(), createClericSubclasses());
}

function createDruid() {
    return new Clase("Druida", "Guardián de la naturaleza con la habilidad de transformarse en animales y conjurar la fuerza del mundo natural.",
        "/recursos/iconsClass/druid.png", druidaCantrip(), druidaSpells(), null);
}

function createFighter() {
    return new Clase("Guerrero", "Maestro del combate armado, adaptable a cualquier estilo de lucha gracias a su entrenamiento y disciplina.",
        "/recursos/iconsClass/figther.png", null, null);
}

function createMonk() {
    return new Clase("Monje", "Luchador espiritual que canaliza su energía interna o ki para realizar hazañas físicas y místicas.",
        "/recursos/iconsClass/monk.png", null, null);
}

function createPaladin() {
    return new Clase("Paladin", "Campeón sagrado que combina habilidades marciales con magia divina, guiado por un juramento de justicia.",
        "/recursos/iconsClass/paladin.png", null, createPaladinSubclasses());
}

function createRanger() {
    return new Clase("Explorador", "Aventurero ágil y autosuficiente, experto en la supervivencia, la caza y el combate en entornos hostiles.",
        "/recursos/iconsClass/ranger.png", null, rangerSpells(), null);
}

function createRogue() {
    return new Clase("Picaro", "Especialista en el sigilo, los trucos y los golpes letales; maestro del subterfugio y la sorpresa.",
        "/recursos/iconsClass/rogue.png", null, null);
}

function createSorcerer() {
    return new Clase("Hechicero", "Lanzador de conjuros que obtiene su poder mágico de una herencia sobrenatural o una fuerza innata.",
        "/recursos/iconsClass/sorcerer.png", sorcererCantrip(), sorcererSpells(), createSorcererSubclasses());
}

function createWarlock() {
    return new Clase("Brujo", "Usuario de magia otorgada por un pacto con una entidad poderosa, con hechizos únicos y habilidades místicas.",
        "/recursos/iconsClass/warlock.png", warlockCantrip(), warlockSpells(), createWarlockSubclass());
}

function createWizard() {
    return new Clase("Mago", "Estudioso de la magia arcana, capaz de aprender y lanzar una amplia variedad de conjuros gracias a su intelecto.",
        "/recursos/iconsClass/wizard.png", wizardCantrip(), wizardSpells(), null);
}


function createClase(){
    let barbarian = createBarbarian();
    let bard = createBard();
    let clerigo = createClerigo();
    let druid = createDruid();
    let fighter = createFighter();
    let monk = createMonk();
    let paladin = createPaladin();
    let ranger = createRanger();
    let rogue = createRogue();
    let sorcerer = createSorcerer();
    let warlock = createWarlock();
    let wizard = createWizard();
    return [barbarian, bard, clerigo, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard];
}

class Clase{

    constructor(nombre, desc, imagen, cantrip, spells, subclass) {
        this.nombre = nombre;
        this.desc  = desc;
        this.imagen = imagen;
        this.cantrip = cantrip;
        this.spells  = spells;
        this.subclass = subclass;
    }

    get Nombre(){
        return this.nombre;
    }
    get hechizo(){
        return this.spells;
    }
    get subclase(){
        return this.subclass;
    }

    get Descripcion(){
        return this.desc;
    }

    get Imagen(){
        return this.imagen;
    }


}

