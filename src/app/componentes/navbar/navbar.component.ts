import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router) { }
  ngOnInit(): void {
    
  }

  // ngOnInit(): void {
  //   if(this.tokenService.getToken()){
  //     this.isLogged=true;
  //   }else{
  //     this.isLogged = false;
  //   }
  // }
  // onLogOut():void{
  //   this.tokenService.logOut();
  //   window.location.reload();
  // }

  login(){
    this.router.navigate(['/login'])
  }

}
