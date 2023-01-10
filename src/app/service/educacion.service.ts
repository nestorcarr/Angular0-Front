import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //url = "http://localhost:8080/educacion/";
  url = environment.URL + 'educacion/';


  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'ver');
  }
  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', educacion);
  }

  public editEducacion(id: number, Educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Educacion);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', educacion);
  }
  /*
  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }
*/



}
