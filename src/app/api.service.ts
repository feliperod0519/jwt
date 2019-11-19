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
/*

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  private heroes: Hero[];

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getHeroes().subscribe(
      data => this.heroes = data
    )
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
}



*/
 /*
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  */

  /*
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
  
}*/
//const found = array1.find(element => element > 10);



/*

import { Injectable } from '@angular/core';
import { HttpClient } from “@angular/common/http”;

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getPolicies(){ 
       return this.httpClient.get(this.SERVER_URL + 'policies');
  }

  public getPolicy(policyId){
       return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`); 
  }
  public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.post(`${this.SERVER_URL + 'policies'}`, policy)
  }

  public deletePolicy(policyId){
      return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
  }
  public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
  }

}

*/

/*

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  private heroes: Hero[];

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getHeroes().subscribe(
      data => this.heroes = data
    )
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
}



*/