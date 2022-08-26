import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  id: number;
  titulo: string = '';
  subtitulo: string = '';
  img: string = '';
  enlace: string = '';
  

  constructor(private Sproyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyect = new Proyectos(
      this.id,
      this.titulo, 
      this.subtitulo, 
      this.img, 
      this.enlace);
    this.Sproyectos.save(proyect).subscribe(
      data => {
        alert("Añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
