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

function createGuildArtisan() {
    let guildArtisan = new Background("Artesano", "Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.", ["Percepción", "Persuasión"]);
    abilities.setWisdomProficiency("Percepción");
    abilities.setCharismaProficiency("Persuasión");
}

function createHauntedOne() {
    let hauntedOne = new Background("Hechizado", "A wicked moment, person, or thing that cannot be slain by sword or spell haunts your mind and flickers in your peripheral vision. You carry it wherever your adventure takes you - or perhaps it carries you.", ["Medicina", "Intimidación"]);
    abilities.setWisdomProficiency("Medicina");
    abilities.setCharismaProficiency("Intimidación");
}

function createNoble() {
    let noble = new Background("Noble", "You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.", ["Historia", "Persuasión"]);
    abilities.setInteligenceProficiency("Historia");
    abilities.setCharismaProficiency("Persuasión");
}

function createOutlander() {
    let outlander = new Background("Exiliado", "You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.", ["Atletismo", "Supervivencia"]);
    abilities.setStrengthProficiency("Atletismo");
    abilities.setWisdomProficiency("Supervivencia");
}

class Background {
    constructor(name, desc, proficiency){
        this.name = name;
        this.desc = desc;
        this.proficiency = proficiency;
    }
}