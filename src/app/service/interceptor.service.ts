import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion/autentificacion.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
/*export class InterceptorService implements HttpInterceptor {

  currentUser: any='';

  constructor(private autenticacionServicio: AutentificacionService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
   // let currentUser = this.autenticacionServicio.UsuarioAutenticado;
    this.currentUser = this.autenticacionServicio.UsuarioActual;
    console.log(this.currentUser);
    //interceptamos el request y agregando el Token
    if(sessionStorage.getItem('AuthToken')){
      req= req.clone({
        setHeaders:{
          Authorization: `Bearer ${sessionStorage.getItem('AuthToken')}`
        }
      })
    }
    console.log("Interceptor esta corriendo " + JSON.stringify(this.currentUser));
    return next.handle(req);


  }

}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];*/
export class InterceptorService {
  constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let intReq = req;
      const token = this.tokenService.getToken();
      if(token != null){
          intReq = req.clone({
              headers: req.headers.set('Authorization','Bearer'+token)
          });
      }
      return next.handle(intReq);
  }
}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true }];

