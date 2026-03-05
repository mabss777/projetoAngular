import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User as userModel } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly API = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.API);
  }

  buscarPorId(id:number): Observable<userModel>{
    const url = `${this.API}/${id}`
    return this.http.get<userModel>(url)
  }
}
