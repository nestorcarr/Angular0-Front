import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  //url = "http://localhost:8080/habilidad/";
  url = environment.URL + 'habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(`${this.url}ver`);// es igual a (this.url + 'ver')
  }

  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }

  public save(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', habilidad);
  }

  public editHabilidad(id: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, habilidad);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', habilidad);
  }
/*
  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, habilidad);
  }
*/

}
