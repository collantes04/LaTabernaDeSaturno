function createability() {
    return new ability();
}

class ability{
    constructor(){
        this.pointpool = 27;
        this.abilityPoints = [8, 8, 8, 8, 8, 8]; 
        this.abilityModif = [0, 0, 0, 0, 0, 0];
        this.abilityNames = ['Fuerza', 'Destreza', 'Complexión', 'Inteligencia', 'Sabiduría', 'Carísma'];
          this.strengthMap = new Map(); 
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

    sumabilityPoint(index) {
        if (this.pointpool > 0) {
            this.abilityPoints[index] += 1;
            this.pointpool -= 1;
            this.calculateabilityModifs(index); // ← actualiza el modificador
        }
    }

     subabilityPoint(index) {
        if (this.pointpool < 27 && this.abilityPoints[index] > 8) {
            this.abilityPoints[index] -= 1;
            this.pointpool += 1;
            this.calculateabilityModifs(index); // ← actualiza el modificador
        }
    }

    

    calculateabilityModifs(index) {
        const score = this.abilityPoints[index];
        const mod = Math.floor((score - 10) / 2);
        this.abilityModif[index] = mod;
        return mod;
    }

    
   
    setabilityPoints(index, value) {
        if (index >= 0 && index < this.abilityPoints.length) {
            this.pointpool -= (value - this.abilityPoints[index]);  
            this.abilityPoints[index] = value;
            this.calculateabilityModifs(index); // ← actualiza el modificador
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

      setCharismaProficiency(string) {
        this.strengthMap.set(string, true); // ← reemplazado el duplicado de Strength
    }
}