import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string = "api/";
  users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.API_URL + 'users');
  }
}     
