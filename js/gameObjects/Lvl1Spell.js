const level = "1";
let arrayHechizos = [];

function createHechizo(){
    const salpicaduraAcido = new Spell("Salpicadura de ácido", "Lanza una burbuja de ácido que daña a cada criatura que golpea.",
    "recursos/iconsSpell/300px-Acid_Splash.webp.png", "1d6 Ácido", level);

    const guardianEspada = new Spell("Guardián de la espada", "Recibe solo la mitad del daño de los ataques contundente, perforantes y cortantes.",
        "recursos/iconsSpell/300px-Blade_Ward.webp.png", null, level);

    const escalofrioHuesos = new Spell("Escalofríos en los huesos", "Evita que el objetivo se cure hasta tu próximo turno. Un objetivo no muerto recibe desventajas en tiradas de ataque",
        "recursos/iconsSpell/300px-Bone_Chill.webp.png", "1d8 Necrótico", level);

    const hojaAuge = new Spell("Hoja en auge", "Golpea con tu arma, afligiendo a tu enemigo con una resonancia que lo hiere durante durante 1d8. Truenan cuando se mueven. Este hechizo se puede lanzar mientras estás silenciado.",
        "recursos/iconsSpell/300px-Booming_Blade.webp.png", "1d8 Trueno", level);

    const tendonReventado = new Spell("Tendón reventado", "Explota un cadáver, provocando que empale a quienes lo rodean.", "recursos/iconsSpell/300px-Bursting_Sinew.webp.png",
        "1d10 Perforación", level);

    const lucesDanzantes = new Spell("Luces danzantes", "Ilumina un radio de 9m/30 pies.", "recursos/iconsSpell/300px-Dancing_Lights.webp.png", 
        null, level);
    
    const explosionSobrenatural = new Spell("Explosión sobrenatural", "Conjura un rayo de energía crepitante. Inflige 1d10. Inflige daño de fuerza a un objetivo.",
        "recursos/iconsSpell/300px-Eldritch_Blast.webp.png", "1d10 Fuerza", level);

    const pernoFuego = new Spell("Perno de fuego", "Lanza una mota de fuego.", "recursos/iconsSpell/300px-Fire_Bolt.webp.png", 
        "1d10 Fuego", level);

    const amigos = new Spell("Amigos", "Gana ventaja en pruebas de Carisma contra una criatura hostil. Se puede lanzar mientras estás silenciado.",
        "recursos/iconsSpell/300px-Friends.webp.png", null, level);

    const guia = new Spell("Guía", "El objetivo gana +1d14 de bonificación en pruebas de habilidad.", "recursos/iconsSpell/300px-Friends.webp.png", 
        null, level);

    const luz = new Spell("Luz", "Infunde un objeto con un aura de luz.", "recursos/iconsSpell/300px-Light.webp.png",
        null, level);

    const manoMago = new Spell("Mano de mago", "Crea una mano espectral que puede manipular e interactuar con objetos.", 
        "recursos/iconsSpell/300px-Mage_Hand.webp.png", null, level);

    const ilusionMenor = new Spell("Ilusión menor", "Crea una ilusión que obligue a las criaturas cercanas a investigar. Puedes permanecer oculto mientras lanzas este hechizo. Este hechizo puede lanzarse mientras estás silenciado.", 
        "recursos/iconsSpell/300px-Minor_Illusion.webp.png", null, level);

    const sprayVenenoso = new Spell("Spray venenoso", "Proyecta una bocanada de gas nocivo que inflige 1d12 Veneno a un objetivo.", "recursos/iconsSpell/300px-Poison_Spray.webp.png", 
        "1d12 Veneno", level);

    const producirLlama = new Spell("Producir llama", "Una llama en tu mano arroja una luz en un radio de 9 m / 30 pies y causa 1d8 daño por fuego al ser arrojado.", 
        "recursos/iconsSpell/300px-Produce_Flame.webp.png", "1d8 Fuego", level);
    
    const rayoEscarcha = new Spell("Rayo de escarcha", "Reduce la velocidad de movimiento del objetivo en 3m / 10 pies.", 
        "recursos/iconsSpell/300px-Ray_of_Frost.webp.png", "1d8 Frío", level);

    const resistencia = new Spell("Resistencia", "Hace que un objetivo sea más resistente a los efectos y condiciones de hechizos: recibe un +1d4 de bonificación a tiradas de salvación", 
        "recursos/iconsSpell/300px-Resistance.webp.png", null, level);
    
    const llamaSagrada = new Spell("Llama sagrada", "Envuelve a un objetivo en un resplandor similar a una llama.", "recursos/iconsSpell/300px-Sacred_Flame.webp.png", 
        "1d8 Radiante", level);

    const cachiporra = new Spell("Cachiporra", "Tu personal o club se vuelve mágico: se ocupa de... 1d8 + modificador de lanzamiento de conjuro Daño contundente y usa tu modificador de Lanzamiento de hechizos para tiradas de ataque",
        "recursos/iconsSpell/380px-Shillelagh.webp.png" ,null, level);
    
    const agarreImpactante = new Spell("Agarre impactante", "Realiza un ataque cuerpo a cuerpo que inflige daño de rayo y evita que el objetivo realice reacciones. Este hechizo tiene ventaja sobre criaturas con armadura de metal.", 
        "recursos/iconsSpell/380px-Shocking_Grasp.webp.png", "1d8 Iluminación", level);
    
    const taumaturgia = new Spell("Taumaturgia", "Ganas ventaja en intimidación y controles de rendimiento.", 
        "recursos/iconsSpell/380px-Thaumaturgy.webp.png", null, level);
    
    const latigoEspinas = new Spell("Látigo de espinas", "Inflige daño al objetivo y lo atrae hacia el lanzador. Tira de la criatura 3 m / 10 pies más cerca de ti.",
        "recursos/iconsSpell/380px-Thorn_Whip.webp.png", "1d6 Perforación", level);
    
    const cuentaMuertos = new Spell("Cuenta de los muertos", "Toca la campana de la fatalidad inminente. Si el objetivo tiene la salud al máximo, infliges 1d8 de daño necrótico en su lugar.", 
        "recursos/iconsSpell/380px-Toll_the_Dead.webp.png", "1d12 Necrótico(1d8 Necrótico si el objetivo tiene la salud completa)", level);
    
    const golpeVerdadero = new Spell("Golpe verdadero", "El lanzador obtiene ventaja en su siguiente tirada de ataque contra el objetivo.  Ganar ventaja en tu próxima tirada de ataque. Este hechizo se puede lanzar mientras estás silenciado.", 
        "recursos/iconsSpell/380px-True_Strike.webp.png", null, level);

    const burlaViciosa = new Spell("Burla Viciosa", "Inflige daño psíquico a los enemigos y les aplica desventaja en sus tiradas de ataque. Insultar a una criatura: tiene desventaja en su siguiente tirada de ataque.", 
        "recursos/iconsSpell/380px-Vicious_Mockery.webp.png", "1d4 Psíquico", level);


    return arrayHechizos = [
        salpicaduraAcido,
        guardianEspada,
        escalofrioHuesos,
        hojaAuge,
        tendonReventado,
        lucesDanzantes,
        explosionSobrenatural,
        pernoFuego,
        amigos,
        guia,
        luz,
        manoMago,
        ilusionMenor,
        sprayVenenoso,
        producirLlama,
        rayoEscarcha,
        resistencia,
        llamaSagrada,
        cachiporra,
        agarreImpactante,
        taumaturgia,
        latigoEspinas,
        cuentaMuertos,
        golpeVerdadero,
        burlaViciosa];
}
