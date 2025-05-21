let abilities = getabilities();

function createAcolyte() {
    let acolyte = new Background("Acólito", "You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.", ["Insight", "Religion"]);
    abilities.setWisdomProficiency("Percepción");
    abilities.setInteligenceProficiency("Religión");
}

function createCharlatan() {
    let charlatan = new Background("Charlatán", "You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.", ["Engaño", "Manejo de manos"]);
    abilities.setCharismaProficiency("Engaño");
    abilities.setDexterityProficiency("ManejoDeManos");
}

function createCriminal() {
    let criminal = new Background("Criminal", "You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.", ["Engaño", "Sigílo"]);
    abilities.setCharismaProficiency("Engaño");
    abilities.setDexterityProficiency("Sigilo");
}

function createEntertainer() {
    let entertainer = new Background("Artista", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.", ["Acrobacia", "Actuación"]);
    abilities.setDexterityProficiency("Acrobacia");
    abilities.setCharismaProficiency("Actuación");
}

function createFolkHero() {
    let folkHero = new Background("Heroe de la aldea", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.", ["ManejoDeAnimales", "Supervicencia"]);
    abilities.setWisdomProficiency("Manejo de animales");
    abilities.setWisdomProficiency("Supervivencia");
}

function createGuildArtisan("") {
    
}

class Background {
    constructor(name, desc, proficiency){
        this.name = name;
        this.desc = desc;
        this.proficiency = proficiency;
    }
}