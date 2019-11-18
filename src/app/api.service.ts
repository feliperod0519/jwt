import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.API_URL + 'people');
  }

  getUser(id: number){
    return this.httpClient.get(`${this.API_URL + 'people'}/${id}`);
  }

  getUserId(email: string):Number{
    let people = this.getUsers();
    let d : User[] = [];
    let j = -1
    people.subscribe((data:User[])=>{
                                      d= data;
                                      d.forEach((i)=>{  if (i.email === email){ j = i.id; }  });
                                    });
    return j;
  }
}
//const found = array1.find(element => element > 10);