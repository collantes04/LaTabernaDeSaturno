function createHability() {
    return new hability();
}

class hability{
    constructor(){
        this.pointpool = 27;
        this.habilityPoints = [0, 0, 0, 0, 0, 0];
        this.habilityModif = [];
        this.habilityNames = ['Fuerza', 'Destreza', 'Complexión', 'Inteligencia', 'Sabiduría', 'Carísma'];
        this.strengthMap = new Map('Atletismo'=false);
        this.dexterityMap = new Map('Acrobacia'=false, 'ManejoDeManos'=false, 'Sigilo'=false);
        this.intelligenceMap = new Map('Arcana'=false, 'Historia'=false, 'Investigación'=false, 'Naturaleza'=false, 'Religión'=false);
        this.wisdomMap = new Map('Manejo de animales'=false, 'Percepción'=false, 'Medicina'=false, 'Percepción'=false, 'Supervivencia'=false);
        this.charismaMap = new Map('Engaño'=false, 'Intimidación'=false, 'Actuación'=false, 'Persuasión'=false);
    }

    getHabilityPoints(index) {
        return this.habilityPoints[index];
    }

    getHabilityNames(index) {
        return this.habilityNames[index];
    }

    getPointPool() {
        return this.pointpool;
    }

    sumHabilityPoint(index){
        if (this.pointpool > 0) {
            this.habilityPoints[index] += 1;
        }
        this.pointpool -= 1;
    }

    subHabilityPoint(index) {
        if (this.pointpool < 27) {
            this.habilityPoints[index] -= 1;
        }
        this.pointpool += 1;
    }

    calculateHabilityModifs(index) {
        switch (this.habilityPoints[index]) {
            case 1:
                this.habilityModif[index] =  "-5";
                break;
        
            case 2 || 3:
                this.habilityModif[index] =  "-4";
                break;

            case 4 || 5:
                this.habilityModif[index] =  "-3";
                break;

            case 6 || 7:
                this.habilityModif[index] =  "-2";
                break;

            case 8 || 9:
                this.habilityModif[index] =  "-1";
                break;

            case 10 || 11:
                this.habilityModif[index] =  "0";
                break;

            case 12 || 13:
                this.habilityModif[index] =  "+1";
                break;

            case 14 || 15:
                this.habilityModif[index] =  "+2";
                break;

            case 16 || 17:
                this.habilityModif[index] =  "+3";
                break;
                
            case 18 || 19:
                this.habilityModif[index] =  "+4";
                break;

            case 20 || 21:
                this.habilityModif[index] =  "+5";
                break;

            case 22 || 23:
                this.habilityModif[index] =  "+6";
                break;

            case 24 || 25:
                this.habilityModif[index] =  "+7";
                break;

            case 26 || 27:
                this.habilityModif[index] =  "+8";
                break;

            case 28 || 29:
                this.habilityModif[index] =  "+9";
                break;

            case 30:
                this.habilityModif[index] =  "+10";
                break;
        }
    }

    setStrengthProficiency(string){
        this.strengthMap.set(string, true);
    }

    setDexterityProficiency(string){
        this.strengthMap.set(string, true);
    }

    setConstitutionProficiency(string){
        this.strengthMap.set(string, true);
    }

    setIntelligenceProficiency(string){
        this.strengthMap.set(string, true);
    }

    setWisdomProficiency(string){
        this.strengthMap.set(string, true);
    }

    setStrengthProficiency(string){
        this.strengthMap.set(string, true);
    }
}