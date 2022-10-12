import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
