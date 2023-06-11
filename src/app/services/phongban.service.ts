import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongbanService {

  constructor(private http: HttpClient) { }
    // pt #

  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/phong-ban');
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/phong-ban/1');
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/phong-ban/'+ id);
  }
  add(data :any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/phong-ban', data);
  }
  update(data :any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/phong-ban', data);
  }
  

}