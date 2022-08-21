import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }
  // sweetalert2 A confirm dialog, with a function attached to the "Confirm"-button
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
        if( id != undefined){
      
          this.educacionS.delete(id).subscribe(
            data => {
              this.cargarEducacion();
              
            }, err => {
              alert("No se pudo eliminar");
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