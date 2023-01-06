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

  public save(Persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', Persona);
  }

  public editPersona(id: number, Persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Persona);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(Persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', Persona);
  }


}
