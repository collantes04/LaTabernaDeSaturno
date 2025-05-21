function createability() {
    return new ability();
}

class ability{
    constructor(){
        this.pointpool = 27;
        this.abilityPoints = [0, 0, 0, 0, 0, 0];
        this.abilityModif = [];
        this.abilityNames = ['Fuerza', 'Destreza', 'Complexión', 'Inteligencia', 'Sabiduría', 'Carísma'];
        this.strengthMap = new Map('Atletismo'=false);
        this.dexterityMap = new Map('Acrobacia'=false, 'Manejo De Manos'=false, 'Sigilo'=false);
        this.intelligenceMap = new Map('Arcana'=false, 'Historia'=false, 'Investigación'=false, 'Naturaleza'=false, 'Religión'=false);
        this.wisdomMap = new Map('Manejo De Animales'=false, 'Percepción'=false, 'Medicina'=false, 'Percepción'=false, 'Supervivencia'=false);
        this.charismaMap = new Map('Engaño'=false, 'Intimidación'=false, 'Actuación'=false, 'Persuasión'=false);
    }

    getabilityPoints(index) {
        return this.abilityPoints[index];
    }

    getabilityNames(index) {
        return this.abilityNames[index];
    }

    getPointPool() {
        return this.pointpool;
    }

    sumabilityPoint(index){
        if (this.pointpool > 0) {
            this.abilityPoints[index] += 1;
        }
        this.pointpool -= 1;
    }

    subabilityPoint(index) {
        if (this.pointpool < 27) {
            this.abilityPoints[index] -= 1;
        }
        this.pointpool += 1;
    }

    calculateabilityModifs(index) {
        switch (this.abilityPoints[index]) {
            case 1:
                this.abilityModif[index] =  "-5";
                break;
        
            case 2 || 3:
                this.abilityModif[index] =  "-4";
                break;

            case 4 || 5:
                this.abilityModif[index] =  "-3";
                break;

            case 6 || 7:
                this.abilityModif[index] =  "-2";
                break;

            case 8 || 9:
                this.abilityModif[index] =  "-1";
                break;

            case 10 || 11:
                this.abilityModif[index] =  "0";
                break;

            case 12 || 13:
                this.abilityModif[index] =  "+1";
                break;

            case 14 || 15:
                this.abilityModif[index] =  "+2";
                break;

            case 16 || 17:
                this.abilityModif[index] =  "+3";
                break;
                
            case 18 || 19:
                this.abilityModif[index] =  "+4";
                break;

            case 20 || 21:
                this.abilityModif[index] =  "+5";
                break;

            case 22 || 23:
                this.abilityModif[index] =  "+6";
                break;

            case 24 || 25:
                this.abilityModif[index] =  "+7";
                break;

            case 26 || 27:
                this.abilityModif[index] =  "+8";
                break;

            case 28 || 29:
                this.abilityModif[index] =  "+9";
                break;

            case 30:
                this.abilityModif[index] =  "+10";
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