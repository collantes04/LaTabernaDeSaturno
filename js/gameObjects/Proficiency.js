class Proficiency {
    constructor(nombreWeapon, nomArmor, nomSvthrow) {
        this.weapon = new Weapon(nombreWeapon);
        this.armor = new Armor(nomArmor);
        this.svthrow = new SvThrow(nomSvthrow)
    }
}

class Weapon {
    constructor(nombre) {
     this.nombre = nombre;   
    }
}

class Armor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class SvThrow {
    constructor(nombre) {
        this.nombre = nombre;
    }
}