import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { onePermisosI } from 'src/app/model/onePermiso.interface';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-aeditarpermiso',
  templateUrl: './aeditarpermiso.component.html',
  styleUrls: ['./aeditarpermiso.component.scss']
})
export class AeditarpermisoComponent implements OnInit {

  formEditarPermiso: FormGroup;
  constructor(private activeRouter: ActivatedRoute, private router: Router, private api: ApiService, private _builder: FormBuilder,) {
    this.formEditarPermiso = this._builder.group({
      ID_PERMISO: new FormControl(''),
      NOMBRES: new FormControl(''),
      APELLIDOS: new FormControl(''),
      ID_SALON: new FormControl(''),
      PERMISO: new FormControl('')
    });
  }

  listaOnePermiso: onePermisosI;
  // formEditarPermiso = new FormGroup({
  //   ID_PERMISO: new FormControl(''),
  //   NOMBRES: new FormControl(''),
  //   APELLIDOS: new FormControl(''),
  //   ID_SALON: new FormControl(''),
  //   PERMISO: new FormControl('')
  // })

  ngOnInit(): void {
    let permisoId = this.activeRouter.snapshot.paramMap.get('id_permiso');
    console.log(permisoId)
    this.api.getOnePermiso(permisoId).subscribe(dataPermiso => {
      this.listaOnePermiso = dataPermiso[0];
      console.log(this.listaOnePermiso)

      this.formEditarPermiso.setValue({
        'ID_PERMISO': this.listaOnePermiso.ID_PERMISO,
        'NOMBRES': this.listaOnePermiso.NOMBRES,
        'APELLIDOS': this.listaOnePermiso.APELLIDOS,
        'ID_SALON': this.listaOnePermiso.ID_SALON,
        'PERMISO': this.listaOnePermiso.PERMISO
      });

      // console.log(this.formEditarPermiso.value)
    })
  }
  editarOnePermiso(form: onePermisosI) {

    this.api.actualizarPermiso(form).subscribe(data => {
      console.log(data)
      this.router.navigate(['administracion'])
    })
    console.log(form);
  }
}
