import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../model/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //////
  private isvalidemail = /\S+@\S+\.\S+/;
  constructor(private _builder: FormBuilder, private api:ApiService) {
    this.loginForm = this._builder.group({
      username: ['', [Validators.required, Validators.pattern(this.isvalidemail)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onLogin(form:LoginI){
    this.api.loginByemail(form).subscribe(data =>{console.log(data);})
  }

  ngOnInit(): void {}
}
