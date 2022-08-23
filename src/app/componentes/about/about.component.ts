import { Component, OnInit } from '@angular/core';
import { Descripcion } from 'src/app/model/descripcion';
import { persona } from 'src/app/model/persona.model';
import { DescripcionService } from 'src/app/service/descripcion.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");
  descripcion: Descripcion[] = [];

  constructor(public personaService: PersonaService, 
              private descripcionS: DescripcionService, 
              private tokenService: TokenService) { }
  
              isLogged = false;

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data})
    
    this.cargarDescripcion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarDescripcion(): void{
    this.descripcionS.lista().subscribe(
      data =>{
        this.descripcion = data;
      }
    )
  }

}
