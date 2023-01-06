import { Injectable } from '@angular/core';
//Esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http';
//Ambos observables, el primero toma el ultimo dato guardado, Esto es para que se susbcriba y que reciba respuesta de forma asincronica
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  //url de la api
  url="http://localhost:4200/index"
  //url="http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servicio de autentificacion esta corriendo");
    //inizializamos currentUserSubject
    this.currentUserSubject = new BehaviorSubject<any>('');
    //new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ))

   }

    iniciarSesion(credenciales:any):Observable<any>
    {
      return this.http.post(this.url, credenciales).pipe(map(data=>{
        this.currentUserSubject.next(data);
        sessionStorage.setItem('currentUser', JSON.stringify(data));
          return data;

      }))

    }
    get UsuarioActual(){
      return this.currentUserSubject.value;
    }
    get UsuarioAutenticado()
    {
      //el metodo BehaviorSubject guarda el ultimo valor estado
      return this.currentUserSubject.value;
    }
   }

