import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AdasboardComponent } from './pages/admin/adasboard/adasboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AadmistracionComponent } from './pages/admin/aadmistracion/aadmistracion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdasboardComponent,
    FooterComponent,
    AadmistracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
