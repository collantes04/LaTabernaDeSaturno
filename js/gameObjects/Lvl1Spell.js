const level = "1";
const arrayHechizosLvl1 = [];

function createHechizosLvl1(){
    const amistadAnimal = new Spell("Amistad animal", "Convence a una bestia para que no te ataque.",
        "recursos/iconsSpell/380px-Animal_Friendship.webp.png", null, level);

    const armaduraAgathys = new Spell("Armadura de Agathys", "Gana 5 puntos de vida temporales y reparte 5 de daño de frío a cualquier criatura que te golpee con un ataque cuerpo a cuerpo.", 
        "recursos/iconsSpell/380px-Armour_of_Agathys.webp.png", null, level);

    const brazosHadar = new Spell("Brazos de Hadar", "Este hechizo permite al lanzador invocar brazos oscuros que infligen daño necrótico a las criaturas en un área centrada en él. Las criaturas afectadas no pueden usar reacciones.", 
        "recursos/iconsSpell/380px-Arms_of_Hadar.webp.png", "2d6", level);

    const perdicion = new Spell("Perdición", "Este hechizo permite al lanzador maldecir temporalmente a los enemigos, haciendo que sus ataques fallen con más frecuencia y debilitando sus tiradas de salvación.", 
        "recursos/iconsSpell/380px-Bane_spell.webp.png", null, level);

    const bendecir = new Spell("Bendecir", "Este hechizo permite a los lanzadores de conjuros reforzar temporalmente sus ataques y las tiradas de salvación de sus aliados. Bendice hasta 3 criaturas. Obtienen un +1d4 de bonificación a tiradas de ataque y tiradas de salvación.", 
        "recursos/iconsSpell/380px-Bless.webp.png", null, level);
    
    const manosArdientes = new Spell("Manos ardientes", "Permite a los lanzadores de conjuros disparar un cono llameante desde la punta de sus dedos e infligir daño de fuego a los enemigos. Cada objetivo inflamable es alcanzado con 3d6 daño por incendio.",
        "recursos/iconsSpell/380px-Burning_Hands.webp.png", "3d6 Fuego", level);
    
    const personaEncantadora = new Spell("Persona encantadora", "Este hechizo permite a los lanzadores de conjuros hechizar temporalmente a una criatura humanoide, lo que otorga ventaja en las pruebas de carisma.", 
        "recursos/iconsSpell/380px-Charm_Person.webp.png", null, level);

    const orbeCromatico = new Spell("Orbe cromático", "Este hechizo permite a los lanzadores de conjuros disparar una bola de energía e infligir el tipo de daño deseado a los enemigos. Reparte 3d8 de daño por trueno o 2d8 ácido, frío, fuego, relámpago o daño por veneno y crea una superficie.", 
        "recursos/iconsSpell/380px-Chromatic_Orb.webp.png", null, level);
    
    const sprayColor= new Spell("Spray de color", "Este hechizo permite a los lanzadores cegar temporalmente a los enemigos con destellos de luz de color, lo que hace que sus ataques fallen con más frecuencia y reduce su alcance.", 
        "recursos/iconsSpell/380px-Colour_Spray.webp.png", null, level);
    
    const dominio = new Spell("Dominio", "Este hechizo permite a los lanzadores de conjuros ordenar a su objetivo que huya, se acerque, se congele, se tire al suelo o suelte su arma.",  
        "recursos/iconsSpell/380px-Command_Halt.webp.png", null, level);
    
    const dueloObligado = new Spell("Duelo obligado", "Este hechizo permite a los lanzadores de conjuros obligar a un enemigo a ignorar a otros objetivos y atacar solo al lanzador de conjuros.", 
        "recursos/iconsSpell/380px-Compelled_Duel.webp.png", null, level);

    const cDAgua = new Spell();

}