class hability{
    constructor(){
        this.pointpool = 27;
        this.habilityPoints = [];
        this.habilityModif = [];
        this.strengthMap = [];
        this.dexterityMap = [];
        this.constitutionMap = [];
        this.intelligenceMap = [];
        this.wisdomMap = [];
        this.charismaMap = [];
    }

    getHabilityPoints() {
        
    }

    sumHabilityPoint(index){
        if (this.pointpool > 0) {
            this.habilityPoints[index] += 1;
        }
    }

    subHabilityPoint(index){
        if (this.pointpool < 27) {
            this.habilityPoints[index] -= 1;
        }
    }

}