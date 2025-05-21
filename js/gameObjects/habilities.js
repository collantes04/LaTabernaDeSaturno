function createability() {
    return new ability();
}

class ability{
    constructor(){
        this.pointpool = 27;
        this.abilityPoints = [8, 8, 8, 8, 8, 8];
        this.abilityModif = [];
        this.abilityNames = ['Fuerza', 'Destreza', 'Complexión', 'Inteligencia', 'Sabiduría', 'Carísma'];
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
            this.abilityPoints[index]++;
            this.pointpool--;
        }
    }

    subabilityPoint(index) {
        if (this.pointpool < 27) {
            this.abilityPoints[index]--;
            this.pointpool++;
        }
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
}