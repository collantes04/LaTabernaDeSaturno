function createBarbarian() {
    return new Clase("Barbaro", "Guerrero salvaje que canaliza la furia primitiva para desatar una fuerza brutal en combate.",
        "recursos/classportraits/barbarian.png", [], null);
}

function createBard() {
    return new Clase("Bardo", "Artista versátil que utiliza magia, música y conocimiento para apoyar al grupo y manipular a sus enemigos.",
        "recursos/classportraits/bard.png", [], null);
}

function createClerigo() {
    return new Clase("Clerigo", "Devoto canalizador del poder divino, experto en curación, protección y combate contra lo profano.",
        "recursos/classportraits/cleric.png", [], createClericSubclasses());
}

function createDruid() {
    return new Clase("Druida", "Guardián de la naturaleza con la habilidad de transformarse en animales y conjurar la fuerza del mundo natural.",
        "recursos/classportraits/druida.png", [], null);
}

function createFighter() {
    return new Clase("Guerrero", "Maestro del combate armado, adaptable a cualquier estilo de lucha gracias a su entrenamiento y disciplina.",
        "recursos/classportraits/fighter.png", [], null);
}

function createMonk() {
    return new Clase("Monje", "Luchador espiritual que canaliza su energía interna o ki para realizar hazañas físicas y místicas.",
        "recursos/classportraits/monje.png", [], null);
}

function createPaladin() {
    return new Clase("Paladin", "Campeón sagrado que combina habilidades marciales con magia divina, guiado por un juramento de justicia.",
        "recursos/classportraits/paladin.png", [], createPaladinSubclasses());
}

function createRanger() {
    return new Clase("Explorador", "Aventurero ágil y autosuficiente, experto en la supervivencia, la caza y el combate en entornos hostiles.",
        "recursos/classportraits/ranger.png", [], null);
}

function createRogue() {
    return new Clase("Picaro", "Especialista en el sigilo, los trucos y los golpes letales; maestro del subterfugio y la sorpresa.",
        "recursos/classportraits/rogue.png", [], null);
}

function createSorcerer() {
    return new Clase("Hechicero", "Lanzador de conjuros que obtiene su poder mágico de una herencia sobrenatural o una fuerza innata.",
        "recursos/classportraits/sorcerer.png", [], createSorcererSubclasses());
}

function createWarlock() {
    return new Clase("Brujo", "Usuario de magia otorgada por un pacto con una entidad poderosa, con hechizos únicos y habilidades místicas.",
        "recursos/classportraits/warlock.png", [], createWarlockSubclass());
}

function createWizard() {
    return new Clase("Mago", "Estudioso de la magia arcana, capaz de aprender y lanzar una amplia variedad de conjuros gracias a su intelecto.",
        "recursos/classportraits/wizard.png", [], null);
}

class Clase{

    constructor(nombre, desc, imagen, spells, subclass) {
        this.nombre = nombre;
        this.desc  = desc;
        this.imagen = imagen;
        this.cantrip = null;
        this.hechizo = spells;
        this.subclase = subclass;
    }

    getNombre(){
        return this.nombre;
    }

    getDescripcion(){
        return this.desc;
    }

    getImagen(){
        return this.imagen;
    }
}

