let abilities = getabilities();

function createAcolyte() {
    let acolyte = new Background("Acólito", "You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.", ["Insight", "Religion"]);
    return acolyte;
}

function createCharlatan() {
    let charlatan = new Background("Charlatán", "You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.", ["Engaño", "Manejo De Manos"]);
    return charlatan;
}

function createCriminal() {
    let criminal = new Background("Criminal", "You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.", ["Engaño", "Sigílo"]);
    return criminal;
}

function createEntertainer() {
    let entertainer = new Background("Artista", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.", ["Acrobacia", "Actuación"]);
    return entertainer;
}

function createFolkHero() {
    let folkHero = new Background("Heroe de la aldea", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.", ["Manejo De Animales", "Supervicencia"]);
    return folkHero;
}

function createGuildArtisan() {
    let guildArtisan = new Background("Artesano", "Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.", ["Percepción", "Persuasión"]);
    return guildArtisan;
}

function createHauntedOne() {
    let hauntedOne = new Background("Hechizado", "A wicked moment, person, or thing that cannot be slain by sword or spell haunts your mind and flickers in your peripheral vision. You carry it wherever your adventure takes you - or perhaps it carries you.", ["Medicina", "Intimidación"]);
    return hauntedOne;
}

function createNoble() {
    let noble = new Background("Noble", "You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.", ["Historia", "Persuasión"]);
    return noble;
}

function createOutlander() {
    let outlander = new Background("Exiliado", "You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.", ["Atletismo", "Supervivencia"]);
    return outlander;
}

function createSage() {
    let sage = new Background("Sabio", "You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose.", ["Arcana", "Historia"]);
    return sage;
}

function createSoldier() {
    let soldier = new Background("Soldado", "You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess.", ["Atletismo", "Intimidación"]);
    return soldier;
}

function createUrchin() {
    let urchin = new Background("Pillo", "After surviving a poor and bleak childhood, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.", ["Manejo De Manos", "Sigilo"]);
    return urchin
}

createBackgrounds() {
    return [createAcolyte, createCharlatan, createCriminal, createEntertainer, createFolkHero, createGuildArtisan, createHauntedOne, createNoble, createOutlander, createSage, createSoldier, createUrchin]
}

class Background {
    constructor(name, desc, proficiency){
        this.name = name;
        this.desc = desc;
        this.proficiency = proficiency;
    }
}