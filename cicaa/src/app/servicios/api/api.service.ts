import { Injectable } from '@angular/core';
import { LoginI } from '../../model/login.interface';
import { ResponseI } from '../../model/response.interface';
import { ListaUsuariosI } from '../../model/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, pipe, of, BehaviorSubject } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { logIngresosI } from 'src/app/model/logIngresos.interface';
import { logIngresosDiasI } from 'src/app/model/logIngresosDias.interfaces';
import { permisosI } from 'src/app/model/permisos.interfaces';
import { onePermisosI } from 'src/app/model/onePermiso.interface';
import { ingresosI } from 'src/app/model/ingresos.interfaces';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'http://127.0.0.1:5000'; //http://10.10.0.125:5000 //http://127.0.0.1:5000  http://172.28.21.220:5000
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(form: LoginI): Observable<ResponseI | void> {
    let direccion = this.url + '/login';

    return this.http.post<ResponseI>(direccion, form).pipe(
      map((res: ResponseI) => {
        if (res.codigo === 'ok') {
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
    this.router.navigate(['login']);
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);

    isExpired ? this.logout() : this.loggedIn.next(false);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'Ha ocurrido un error en la info';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }

  getUsuarios(): Observable<ListaUsuariosI[]> {
    let direccion = this.url + '/usuarios';
    return this.http.get<ListaUsuariosI[]>(direccion);
  }

  getLogIngresos(): Observable<logIngresosI[]> {
    let direccion = this.url + '/log_ingresos_month';
    return this.http.get<logIngresosI[]>(direccion);
  }

  getLogIngresosDias(): Observable<logIngresosDiasI[]> {
    let direccion = this.url + '/log_ingresos_days';
    return this.http.get<logIngresosDiasI[]>(direccion);
  }

  getPermisos(): Observable<permisosI[]> {
    let direccion = this.url + '/permisos';
    return this.http.get<permisosI[]>(direccion);
  }

  getPermisosUsuario(id_usuario): Observable<permisosI> {
    let direccion = this.url + '/permisos_usuario/' + id_usuario;
    return this.http.get<permisosI>(direccion);
  }

  getOnePermiso(id_permiso): Observable<permisosI> {
    let direccion = this.url + '/one_permiso/' + id_permiso;
    return this.http.get<permisosI>(direccion);
  }

  actualizarPermiso(form: onePermisosI): Observable<onePermisosI> {
    let direccion = this.url + '/editar_permiso';
    return this.http.put<onePermisosI>(direccion, form);
  }

  getUltimosIngresos(): Observable<ingresosI[]> {
    let direccion = this.url + '/ingresos';
    return this.http.get<ingresosI[]>(direccion);
  }
}
