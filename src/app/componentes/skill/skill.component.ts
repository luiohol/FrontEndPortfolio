import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillService: SkillService, 
              private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {

    
    
  this.cargarDescripcion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarDescripcion(): void{
    this.skillService.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

}
