import { Injectable } from '@angular/core';
//Esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http';
//Esto es para que se susbcriba y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//import { Datos } from '../../../assets/json/db.json';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
     //El primer http se llama alias
     private http: HttpClient
  ) { }
  //Metodo observale que devuelve datos
  getDatos():Observable<any> {
    //Se llama al Json con su path -ruta- , o bien, en su lugar se puede poner una URL para traer datos de un Json que este online
  return this.http.get('./assets/json/db.json');

  }
}
