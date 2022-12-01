import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdasboardComponent } from './pages/admin/adasboard/adasboard.component';
import { AadmistracionComponent } from './pages/admin/aadmistracion/aadmistracion.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { AeditarpermisoComponent } from './pages/admin/aeditarpermiso/aeditarpermiso.component';
import { AnuevopermisoComponent } from './pages/admin/anuevopermiso/anuevopermiso.component';
import { ApermisosusuarioComponent } from './pages/admin/apermisosusuario/apermisosusuario.component';

const routes: Routes = [
  { path: '', component: AdasboardComponent },
  { path: 'administracion', component: AadmistracionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contactanos', component: ContactanosComponent },
  {path: 'permisosusuarios/:id_usuario', component: ApermisosusuarioComponent},
  { path: 'editarpermiso/:id_permiso', component: AeditarpermisoComponent },
  { path: 'nuevopermiso', component: AnuevopermisoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
