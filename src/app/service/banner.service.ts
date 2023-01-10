import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  //url = "http://localhost:8080/banner/";
  url = environment.URL + 'banner/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(`${this.url}ver`);//(this.url + 'ver')
  }

  //prestar atencion las cambia a comillas '' decia que eran ´´
  public getById(id: number):Observable<Banner>{
  return this.httpClient.get<Banner>(this.url + `detail/${id}`);
  }

  public save(banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', banner);
  }

  public editBanner(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, banner);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', banner);
  }
/*
  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, banner);
  }
*/
}
