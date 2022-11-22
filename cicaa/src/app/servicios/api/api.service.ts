import { Injectable } from '@angular/core';
import { LoginI } from '../../model/login.interface';
import { ResponseI } from '../../model/response.interface';
import { ListaUsuariosI } from '../../model/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe, of, BehaviorSubject } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "http://127.0.0.1:5000"
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(form: LoginI): Observable<ResponseI | void> {
    let direccion = this.url + "/login";

    return this.http.post<ResponseI>(direccion, form)
      .pipe(
        map((res: ResponseI) => {
          if (res.message === 'ok') {
            this.saveToken(res.token);
            this.loggedIn.next(true);
          }
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(["login"]);

  }


  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);

    isExpired ? this.logout() : this.loggedIn.next(true);
  }


  private saveToken(token: string): void {
    localStorage.setItem('token', token);

  }


  private handlerError(err): Observable<never> {
    let errorMessage = "Ha ocurrido un error en la info";
    if (err) {
      errorMessage = `Error: code ${err.message}`;

    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }

  getUsuarios(): Observable<ListaUsuariosI[]>{
    let direccion = this.url + "/usuarios";
    return this.http.get<ListaUsuariosI[]>(direccion)
  }


}
