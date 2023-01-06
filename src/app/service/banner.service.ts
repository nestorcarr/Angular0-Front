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

  public save(Banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', Banner);
  }

  public editBanner(id: number, Banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Banner);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public edit(Banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'update', Banner);
  }


/*----------------------------------------------*/
/*
public lista() : Observable<Banner[]>{
  return this.httpClient.get<Banner []>(this.url + 'ver');
}

public detail(id : number) : Observable<Banner>{
  return this.httpClient.get<Banner>(this.url + `detail/${id}`); //se tuvo que usar las comillas que van a la izq. porque se le pasa el id, si no, no lo toma
}

public save(Banner: Banner): Observable<any>{
  return this.httpClient.post<any>(this.url + 'new', Banner);
}

public update(id: number, Banner: Banner): Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}`, Banner);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `delete/${id}`);


}
*/

  //prestar atencion las cambia a comillas '' decia que eran ´´
/*  public detail(id: number):Observable<Banner>{
    return this.httpClient.get<Banner>(this.url + `detail/${id}`);
  }*/


}