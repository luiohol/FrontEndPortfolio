import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyectos[] = [];
  
  constructor(private Sproyectos: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.Sproyectos.lista().subscribe(data => { 
      this.proyecto = data; })
  }

  delete(id?: number){
    Swal.fire({
      title: '¿Está Seguro?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        if(id != undefined){
          this.Sproyectos.delete(id).subscribe(
            data => {
              this.cargarProyecto();
            }, err => {
              alert("No se pudo borrar");
            }
          )
        }
        Swal.fire(
          'Borrado',
          'Su registro ah sido borrado.'
        )
      }
    })
    
  }

}
