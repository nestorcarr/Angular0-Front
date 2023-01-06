import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //url = "http://localhost:8080/proyecto/";
  url = environment.URL + 'proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.url}ver`);//(this.url + 'ver')
  }

  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  }

  public save(Proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', Proyecto);
  }

  public editProyecto(id: number, Proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Proyecto);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(Proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', Proyecto);
  }


}
