import { Injectable } from '@angular/core';
import { LoginI } from '../../model/login.interface';
import { ResponseI } from '../../model/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:5000/"

  constructor(private http:HttpClient) {}

  loginByemail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "usuarios";

    return this.http.post<ResponseI>(direccion, form);
  }
}
