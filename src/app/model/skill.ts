export class Skill {
    id?: number;
    nombreS: string;
    porcentajeS: string;
    radioS: string;

    constructor(nombreS: string, porcentajeS: string, radioS: string){
        this.nombreS = nombreS;
        this.porcentajeS = porcentajeS;
        this.radioS = radioS;
    }
}

