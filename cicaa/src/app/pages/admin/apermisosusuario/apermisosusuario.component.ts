import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { permisosI } from 'src/app/model/permisos.interfaces';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-apermisosusuario',
  templateUrl: './apermisosusuario.component.html',
  styleUrls: ['./apermisosusuario.component.scss']
})
export class ApermisosusuarioComponent implements OnInit {

  permisosUsuarioLista: permisosI
  constructor(private activeRouter: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    let id_usuario = this.activeRouter.snapshot.paramMap.get('id_usuario');
    console.log(id_usuario)

    this.api.getPermisosUsuario(id_usuario).subscribe(dataPermisosUsuario =>{
      this.permisosUsuarioLista= dataPermisosUsuario;
    });
    // this.api.getOnePermiso(id_usuario).subscribe((dataPermisos) => {
    //   this.permisosLista=dataPermisos;
    // });
  }

  editarPermisoUsuario(id_permiso){
    this.router.navigate(['editarpermiso', id_permiso]);
  }

}
