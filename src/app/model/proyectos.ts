export class Proyectos {
   id: number;
   titulo: string;
   subtitulo: string
   img: string;
   enlace: string;


   constructor(id: number,titulo: string,subtitulo: string,img: string,enlace: string){
    this.id = id;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.img = img;
    this.enlace= enlace;

   }
}
