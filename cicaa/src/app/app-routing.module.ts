import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdasboardComponent } from './pages/admin/adasboard/adasboard.component';
import { AadmistracionComponent } from './pages/admin/aadmistracion/aadmistracion.component';
const routes: Routes = [
  { path: '', component: AdasboardComponent},
  { path: 'administracion', component: AadmistracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
