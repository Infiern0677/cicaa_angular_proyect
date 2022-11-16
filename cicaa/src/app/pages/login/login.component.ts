import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../model/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //////
  private isvalidemail = /\S+@\S+\.\S+/;
  estado: boolean = true;

  constructor(
    private _builder: FormBuilder,
    private api: ApiService,
    private router: Router) {
    this.loginForm = this._builder.group({
      CORREO: ['', [Validators.required, Validators.pattern(this.isvalidemail)]],
      CONTRASENA: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onLogin(form: LoginI) {
    this.api.login(form).subscribe((res) => {
      if (res[`message`] != 'fail') {
        this.router.navigate([""]);
      } else {
        this.estado = false;

      }
    });
  }

  ngOnInit(): void { }
}
