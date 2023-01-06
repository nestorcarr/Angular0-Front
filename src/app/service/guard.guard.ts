import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion/autentificacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor (private autenticacionServicio: AutentificacionService, private rutas: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser= this.autenticacionServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      return true;
    }else{
      this.rutas.navigate(['/index'])
      return false;
    }
      return true;
  }

}
