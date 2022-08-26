import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdescripcionComponent } from './componentes/about/editdescripcion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditskillComponent } from './componentes/skill/editskill.component';
import { NewskillComponent } from './componentes/skill/newskill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editdescp/:id', component: EditdescripcionComponent},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'nuevaskill', component: NewskillComponent},
  {path: 'newproyect', component: NewproyectoComponent},
  {path: 'editproyect/:id', component: EditproyectoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
