import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {

  constructor(private http: HttpClient) { }
    // pt #

  getList(): Observable<any> {
    return this.http.get<any>(' http://localhost:3000/nhan-vien');
  }
  getById(id : any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/nhan-vien/'+id);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/nhan-vien/'+id);
  }
  add(data :any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/nhan-vien', data);
  }
  update(data :any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/nhan-vien', data);
  }
  

}