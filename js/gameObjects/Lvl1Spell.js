const level = "1";

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

    const sprayVenenoso = new Spell("Spray venenoso", "Proyecta una bocanada de gas nocivo que inflige 1d12 Veneno a un objetivo.", "", "1d12 Veneno")
}
