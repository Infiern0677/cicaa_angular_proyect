import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //////
  private isvalidemail = /\S+@\S+\.\S+/;
  constructor(private _builder: FormBuilder) {
    this.loginForm = this._builder.group({
      username: ['', [Validators.required, Validators.pattern(this.isvalidemail)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onLogin(): void {
    if(this.loginForm.invalid){
      return;
    }else{

    }
 
  }

  ngOnInit(): void {}
}
