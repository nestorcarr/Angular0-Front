import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //url = "http://localhost:8080/persona/";
  url = environment.URL + 'persona/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.url}ver`);//(this.url + 'ver')
  }

  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.url + `detail/${id}`);
  }

  public save(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', persona);
  }

  public editPersona(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, persona);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', persona);
  }
/*
  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, persona);
  }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url +'ver');
  }

*/

}
