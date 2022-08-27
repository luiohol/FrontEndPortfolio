import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Descripcion } from '../model/descripcion';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {
  URL = 'https://portfoliolb.herokuapp.com/descripcion/';


  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Descripcion[]>{
    return this.httpClient.get<Descripcion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Descripcion>{
    return this.httpClient.get<Descripcion>(this.URL + `detail/${id}`);
  }

  public save(descripcion: Descripcion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', descripcion);
  }

  public update(id: number, descripcion: Descripcion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, descripcion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
