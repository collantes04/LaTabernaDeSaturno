



function createAcolyte() {
    let acolyte = new Background("Acólito", "You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.","/recursos/iconsBackground/Background_Acolyte_Icon.png", ["Insight", "Religion"]);
    return acolyte;
}

function createCharlatan() {
    let charlatan = new Background("Charlatán", "You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.","/recursos/iconsBackground/Background_Charlatan_Icon.png", ["Engaño", "Manejo De Manos"]);
    return charlatan;
}

function createCriminal() {
    let criminal = new Background("Criminal", "You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.", "/recursos/iconsBackground/Background_Criminal_Icon.png",["Engaño", "Sigílo"]);
    return criminal;
}

function createEntertainer() {
    let entertainer = new Background("Artista", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.",  "/recursos/iconsBackground/Background_Entertainer_Icon.png",["Acrobacia", "Actuación"]);
    return entertainer;
}

function createFolkHero() {
    let folkHero = new Background("Heroe de la aldea", "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.", "/recursos/iconsBackground/Background_Folk_Hero_Icon.png", ["Manejo De Animales", "Supervicencia"]);
    return folkHero;
}

function createGuildArtisan() {
    let guildArtisan = new Background("Artesano", "Su habilidad en un oficio en particular le ha ganado membresía en un gremio mercantil, ofreciendo privilegios y protección mientras participa en su arte.Reparar y descubrir artesanías raras traerá una nueva inspiración.", "/recursos/iconsBackground/Background_Folk_Hero_Icon.png", ["Percepción", "Persuasión"]);
    return guildArtisan;
}

function createHauntedOne() {
    let hauntedOne = new Background("Hechizado", "Un momento malvado, persona o cosa que no puede ser asesinada por espada o hechizo persigue tu mente y parpadea en tu visión periférica.Lo llevas a donde te lleve tu aventura, o tal vez te lleve.", "/recursos/iconsBackground/Background_Haunted_One_Icon.png", ["Medicina", "Intimidación"]);
    return hauntedOne;
}

function createNoble() {
    let noble = new Background("Noble", "Te criaron en una familia entre la élite social, acostumbrada al poder y el privilegio.La acumulación de renombre, poder y lealtad aumentará su estado.",  "/recursos/iconsBackground/Background_Noble_Icon.png",["Historia", "Persuasión"]);
    return noble;
}

function createOutlander() {
    let outlander = new Background("Exiliado", "Creciste en la naturaleza, aprendiendo a sobrevivir lejos de las comodidades de la civilización.Sobrevivir los peligros inusuales de la naturaleza mejorará su destreza y comprensión.", "/recursos/iconsBackground/Background_Outlander_Icon.png", ["Atletismo", "Supervivencia"]);
    return outlander;
}

function createSage() {
    let sage = new Background("Sabio", "Eres curioso y bien leído, con una sed interminable de conocimiento.Aprender sobre la rara tradición del mundo lo inspirará a poner este conocimiento con un mayor propósito.", "/recursos/iconsBackground/Background_Sage_Icon.png", ["Arcana", "Historia"]);
    return sage;
}

function createSoldier() {
    let soldier = new Background("Soldado", "Estás capacitado en tácticas de Battlefield y combate, habiendo servido en una milicia, compañía mercenaria o Cuerpo de Oficiales.Muestre tácticas y valentías inteligentes en el campo de batalla para mejorar su destreza.",  "/recursos/iconsBackground/Background_Soldier_Icon.png",["Atletismo", "Intimidación"]);
    return soldier;
}

function createUrchin() {
    let urchin = new Background("Pillo", "Después de sobrevivir a una infancia pobre y sombría, sabes cómo aprovechar al máximo muy poco.El uso de su calle Smarts refuerza su espíritu para el viaje por delante.", "/recursos/iconsBackground/Background_Urchin_Icon.png", ["Manejo De Manos", "Sigilo"]);
    return urchin;
}


function createBackgrounds() {
    let acolyte = createAcolyte();
    let charlatan = createCharlatan();
    let criminal = createCriminal();
    let entertainer = createEntertainer();
    let folkHero = createFolkHero();
    let guildArtisan = createGuildArtisan();
    let hauntedOne = createHauntedOne();
    let noble = createNoble();
    let outlander = createOutlander();
    let sage = createSage();
    let soldier = createSoldier();
    let urchin = createUrchin();
    return [acolyte,charlatan,criminal,entertainer,folkHero,guildArtisan,hauntedOne,noble,outlander,sage,soldier,urchin];
}

class Background {
    constructor(name, desc,imagen, proficiency){
        this._name = name;
        this.desc = desc;
        this._imagen = imagen
        this._proficiency = proficiency;
    }
    get name(){
        return this._name;
    }
    get imagen(){
        return this._imagen;
    }
    get descripcion(){
        return this.desc;
    }
    get proficiency(){
        return this._proficiency;
    }
}
