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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdasboardComponent,
    FooterComponent,
    AadmistracionComponent,
    LoginComponent
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
