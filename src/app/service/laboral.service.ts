import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboral } from '../model/laboral';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {
  //url = "http://localhost:8080/laboral/";
  url = environment.URL + 'laboral/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Laboral[]>{
    return this.httpClient.get<Laboral[]>(`${this.url}ver`);//(this.url + 'ver')
  }

  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Laboral>{
    return this.httpClient.get<Laboral>(this.url + `detail/${id}`);
  }

  public save(Laboral: Laboral):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', Laboral);
  }

  public editLaboral(id: number, laboral: Laboral): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, laboral);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(Laboral: Laboral):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', Laboral);
  }

}
