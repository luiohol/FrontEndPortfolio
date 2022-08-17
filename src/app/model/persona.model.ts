export class persona{
    id?: number;
    nombre: string;
    apellidos: string;
    img: string;


    constructor(nombre: string, apellido:string, img: string){
        
        this.nombre = nombre;
        this.apellidos = apellido;
        this.img = img;

    }
}