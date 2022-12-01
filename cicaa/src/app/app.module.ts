import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgMaterialModule } from './class/Material/ng-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AdasboardComponent } from './pages/admin/adasboard/adasboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AadmistracionComponent } from './pages/admin/aadmistracion/aadmistracion.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { ButtonComponent } from './componentes/button/button.component';
import { InputComponent } from './componentes/input/input.component';
import { ValidacionespropiasComponent } from './class/validacionespropias/validacionespropias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AeditarpermisoComponent } from './pages/admin/aeditarpermiso/aeditarpermiso.component';
import { ApermisosusuarioComponent } from './pages/admin/apermisosusuario/apermisosusuario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdasboardComponent,
    FooterComponent,
    AadmistracionComponent,
    LoginComponent,
    PerfilComponent,
    ContactanosComponent,
    ModalComponent,
    ButtonComponent,
    InputComponent,
    ValidacionespropiasComponent,
    AeditarpermisoComponent,
    ApermisosusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
