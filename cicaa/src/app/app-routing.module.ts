import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdasboardComponent } from './pages/admin/adasboard/adasboard.component';
import { AadmistracionComponent } from './pages/admin/aadmistracion/aadmistracion.component';
import { LoginComponent} from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  { path: '', component: AdasboardComponent},
  { path: 'administracion', component: AadmistracionComponent},
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
