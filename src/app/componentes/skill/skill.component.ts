import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  
  cargarSkill(): void{
    this.skillService.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
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
          this.skillService.delete(id).subscribe(
            data => {
              this.cargarSkill(); this
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
