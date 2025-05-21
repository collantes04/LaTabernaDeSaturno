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

    const cDAgua = new Spell("Crear o destruir agua", "Este hechizo permite a los lanzadores de conjuros conjurar o destruir un área de agua (o superficies similares al agua). Elige invocar la lluvia o destruir una superficie a base de agua.", 
        "recursos/iconsSpell/380px-Create_Water.webp.png", null, level);
    
    const curarHeridas = new Spell("Curar heridas", "Cura a una criatura que puedas tocar.",
        "recursos/iconsSpell/380px-Cure_Wounds.webp.png", "1d8 Cicatrización", level);
    
    const disfrazarse = new Spell("Disfrazarse", "Cambia mágicamente todos los aspectos de tu apariencia.",
        "recursos/iconsSpell/380px-Disguise_Self.webp.png", null, level);

    const susurrosDisonantes = new Spell("Susurros disonantes", "Este hechizo permite a los lanzadores de conjuros infundir terror en un objetivo e infligir daño psíquico a ellos.",
        "recursos/iconsSpell/380px-Dissonant_Whispers.webp.png", "3d6 Psíquico", level);

    const favorDivino = new Spell("Favor divino", "Tu oración te otorga un resplandor divino. Tus armas infligen 1d4 adicional de daño radiante.", 
        "recursos/iconsSpell/380px-Divine_Favour.webp.png", null, level);

    const mejoraSalto = new Spell("Mejorar el salto", "Triplica la distancia de salto.", 
        "recursos/iconsSpell/380px-Enhance_Leap.webp.png", null, level);
    
    const golpeAtrapamiento = new Spell("Golpe de atrapamiento", "Tu ataque invoca enredaderas espinosas que pueden atrapar a tu objetivo. Las criaturas atrapadas no pueden moverse y reciben 1d6 de daño penetrante al comienzo de cada uno de sus turnos. Un aliado puede usar la acción de ayuda para intentar arrancar las enredaderas.", 
        "recursos/iconsSpell/380px-Ensnaring_Strike_Ranged.webp.png", "+1d6 Perforación", level);
    
    const enredar = new Spell("Enredar", "Las vides brotan del suelo, convirtiéndolo en terreno difícil y posiblemente criaturas enredadas en su interior. Las criaturas enredadas no pueden moverse. Un aliado puede usar su acción de ayuda para intentar arrancar las enredaderas.", 
        "recursos/iconsSpell/380px-Ensnaring_Strike_Ranged.webp.png", null, level);

    const retiradaExpedita = new Spell("Retirada expedita", "Gana velocidad inmediatamente y como acción adicional en cada uno de tus turnos hasta que este hechizo termine", 
    "recursos/iconsSpell/300px-Expeditious_Retreat.webp.png", null, level);

    const fuegoHada = new Spell("Fuego de hadas", "Todos los objetivos dentro de la luz se vuelven visibles yLas tiradas de ataque contra ellos tienen ventaja.", 
    "recursos/iconsSpell/300px-Faerie_Fire.webp.png", null, level);
    
    const vidaFalsa = new Spell("Vida falsa", "Refuérzate con un facsímil nigromántico de vida para ganar 7 puntos de vida temporales.", 
    "recursos/iconsSpell/300px-False_Life.webp.png", null, level);

    const caidaPluma = new Spell("Caída de plumas", "Permite a los lanzadores de conjuros volverse ligeros como una pluma, a sí mismos y a sus aliados, evitando que sufran daño al caer desde alturas extremas. Tú y tus aliados cercanos obtenéis inmunidad al daño por caída.",
    "recursos/iconsSpell/300px-Feather_Fall.webp.png", null, level);

    const encuentroFamiliar = new Spell("Encuentro familiar", " Este hechizo permite a los lanzadores de conjuros conjurar un familiar feérico que puede ayudarlos en combate o exploración del mundo. Invoca un familiar, un espíritu feérico que toma la forma animal que elijas.", 
    "recursos/iconsSpell/300px-Find_Familiar_Cat.webp.png", null, level);

    //con
    
    

    const grasa = new Spell("Cubre el suelo con grasa inflamable. Se convierte en terreno difícil y las criaturas que se encuentran dentro pueden caer. Propenso.", 
        "recursos/iconsSpell/300px-Grease.webp.png", null, level);

    const pernoGuia = new Spell("La siguiente tirada de ataque contra este objetivo tiene Ventaja.", 
        "recursos/iconsSpell/300px-Guiding_Bolt.webp", "4d6 Radiante", level);
    
    const granizoEspinas = new Spell("Dispara una descarga de espinas. Las espinas infligen daño de arma al objetivo y luego explotan. La explosión inflige 1d10 adicionales. Daño penetrante al objetivo y a las criaturas circundantes. Si falla, las espinas explotan. Al salvar, los objetivos reciben la mitad del daño de la explosión.", 
        "recursos/iconsSpell/300px-Hail_of_Thorns.webp.png", "+1d10 Perforación", level);
    
    const palabraSanacion = new Spell("Dispara una descarga de espinas. Las espinas infligen daño de arma al objetivo y luego explotan. La explosión inflige 1d10 adicionales. Daño penetrante al objetivo y a las criaturas circundantes. Si falla, las espinas explotan. Al salvar, los objetivos reciben la mitad del daño de la explosión.", 
        "recursos/iconsSpell/300px-Healing_Word.webp", "1d4 + modificador de lanzamiento de conjuros. Cicatrización", level);
    
    const reprimendaInfernal = new Spell("Reacciona a tu próximo atacante con llamas que infligen 2d10. Daños por incendio .", 
        "recursos/iconsSpell/300px-Hellish_Rebuke.webp.png", "2d10 Fuego ( Tirada de salvación de Destreza para reducir a la mitad)", level);
    
    const heroismo = new Spell("Hazte a ti mismo o a un objetivo inmune a aterrorizar y gana 5puntos de vida temporales cada turno. Sólo se pueden tener puntos de vida temporales de una sola fuente.", 
        "recursos/iconsSpell/300px-Heroism.webp.png", null, level);
    
    const maleficio = new Spell("Haz que tus ataques inflijan 1d6 adicionales, daño necrótico al objetivo y le da desventaja en una habilidad de tu elección. Si el objetivo muere antes de que termine el hechizo, puedes volver a aplicar Hex a una nueva criatura sin gastar unespacio de hechizo.", 
        "recursos/iconsSpell/300px-Hex.webp.png", "1d6 Necrótico (por cada ataque del lanzador)", level);
    
    const marcaCazador = new Spell("Marca una criatura como tu presa para infligir 1d6 adicional, daño de arma cada vez que lo golpeas con un ataque de arma. Si el objetivo muere antes de que termine el hechizo, puedes usar marca del cazador para marcar una nueva criatura.", 
        "recursos/iconsSpell/300px-Hunter's_Mark.webp.png", "1d6 Arma (Por ataque de arma)", level);
    
    const cuchilloHielo = new Spell("Lanza un trozo de hielo que inflige 1d10 Daño penetrante . Explota e inflige 2d6. Inflige daño por frío a cualquiera cercano. Deja una superficie de hielo . Si falla, el fragmento de hielo explota. Este hechizo se puede lanzar mientras estás Silenciado.", 
        "recursos/iconsSpell/300px-Ice_Knife.webp.png", "1d10 Perforación. + 2d6 Frío", level);
    
    const infligirHeridas = new Spell("Putrefactar una criatura con energía necrótica llenando tus manos.", 
        "recursos/iconsSpell/300px-Inflict_Wounds.webp.png", "3d10 Necrótico", level);
    
    const caminanteLargo = new Spell("Aumenta la velocidad de movimiento de una criatura en 3m / 10 pies.", 
        "recursos/iconsSpell/300px-Longstrider.webp.png", null, level);
    
    const armaduraMago = new Spell("Rodea a una criatura desarmada con una fuerza mágica protectora. La clase de armadura La clase de armadura aumenta a 13 + su modificador de Destreza.Este efecto no se acumula con Defensa sin armadura. El objetivo no puede llevar armadura .", 
        "recursos/iconsSpell/300px-Mage_Armour.webp.png", null, level);
    
    const misilMagico = new Spell("Crea tres dardos de fuerza mágica, cada uno inflige 1d4 + 1 Inflige daño de fuerza a su objetivo. Los dardos siempre dan en el objetivo y se puede apuntar a cada uno de ellos individualmente.", 
        "recursos/iconsSpell/300px-Magic_Missile.webp.png", "3d4 + 1 Fuerza", level);

    const proteccionContraMalBien = new Spell("Protege a un aliado contra los ataques y poderes de Aberraciones , Celestiales , Elementales , Fey , Demonios y No Muertos. Los objetivos no pueden ser Encantado, Asustado , o poseído por ellos, y cuando estas criaturas lo atacan, tienen Desventaja .", 
        "recursos/iconsSpell/300px-Protection_from_Evil_and_Good.webp.png", null, level);
    
    const rayoEnfermedad = new Spell("Este hechizo permite a los lanzadores de conjuros golpear a los enemigos con un rayo de energía nauseabunda que inflige Daño por veneno y potencialmente los envenena.", 
        "recursos/iconsSpell/300px-Ray_of_Sickness.webp.png", "2d8 Veneno", level);

    const santuario = new Spell("Tú o un aliado no pueden ser objetivo hasta que ataques o dañes a una criatura. Aún puedes recibir daño de hechizos de área. Hasta que la entidad afectada ataque o dañe a otra criatura, no puede ser objetivo de ataques enemigos. Sin embargo, aún puede recibir daño de hechizos que afecten un área mayor.", 
        "recursos/iconsSpell/300px-Sanctuary.webp.png", null, level);
    
    const golpeAbrasador = new Spell("Tu arma brilla con una intensidad al rojo vivo. Inflige, además del daño del arma, 1d6 extra. Daño por fuego y marca al objetivo con Golpe abrasador .", 
        "recursos/iconsSpell/300px-Searing_Smite.webp.png", "+ 2d6 Fuego", level);
    
    const escudo = new Spell("Cuando estés a punto de ser golpeado por un enemigo, usa tu Reacción para aumentar tu Clase de armadura aumentada en 5. Tampoco recibes daño de Misil mágico. Estos efectos duran hasta el comienzo de tu siguiente turno.", 
        "recursos/iconsSpell/300px-Shield_spell.webp.png", null, level);

    const escudoFe = new Spell("Rodea a una criatura con un campo brillante de magia que aumenta su Clase de armadura por 2.", 
        "recursos/iconsSpell/300px-Shield_of_Faith.webp.png", null, level);
    
    const dormir = new Spell("Sumerge a las criaturas en un sueño mágico. Selecciona objetivos con un total de hasta 24 puntos de golpe. La condición termina al sufrir daño.", 
        "recursos/iconsSpell/300px-Sleep.webp.png", null, level);
    
    const hablarAnimales = new Spell("Este hechizo permite a los lanzadores de conjuros comprender y hablar con bestias y animales durante un día.", 
        "recursos/iconsSpell/300px-Speak_with_Animals.webp.png", null, level);
    
    const horribleRisaTasha = new Spell("Dejar una criatura tumbada por la risa, sin capacidad de levantarse. La criatura debe tener una Inteligencia de 5 o más. El objetivo puede intentar librarse del efecto cada vez que recibe daño.", 
        "recursos/iconsSpell/300px-Speak_with_Animals.webp.png", null, level);

}