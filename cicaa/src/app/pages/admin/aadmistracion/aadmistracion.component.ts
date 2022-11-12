import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
@Component({
  selector: 'app-aadmistracion',
  templateUrl: './aadmistracion.component.html',
  styleUrls: ['./aadmistracion.component.scss']
})
export class AadmistracionComponent implements OnInit {
  pAdminForm: FormGroup; 

  constructor(
    private _builder: FormBuilder, 
    private api:ApiService, 
    private router:Router) {
    this.pAdminForm = this._builder.group({
      typedocument: ['', [Validators.required]],
      txtDocumen: ['', [Validators.required, Validators.pattern("[0-9]+") ,  Validators.minLength(8), Validators.maxLength(10)]],
      txtNombre: ['', [Validators.required, Validators.pattern("[A-Za-z ]+")]],
      txtApellido: ['', [Validators.required, Validators.pattern("[A-Za-z ]+")]],
      nSalon: ['', [Validators.required]]

    });
  }
  ngOnInit(): void {
  }

  onPermit(form){

  }

}
