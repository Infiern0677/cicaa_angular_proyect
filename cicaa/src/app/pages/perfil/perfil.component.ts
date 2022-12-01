import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ListaUsuariosI } from '../../model/usuario.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  helper = new JwtHelperService();
  decode_token=this.helper.decodeToken(localStorage.getItem('token'));
  usuariosLista: ListaUsuariosI[] = [];
  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.usuariosLista=this.decode_token;
    console.log(this.usuariosLista)
  }

}
