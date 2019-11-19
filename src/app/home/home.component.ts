import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: User[] = [];
  private Url = 'api/users';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe((data:User[])=>{
      this.users= data;
      console.log(this.users);
    });
  }

  //getUsers(): Observable<User[]> {
  //  return this.http.get<User[]>(this.Url)
  //}

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
import { ApiService } from './api.service';


import { Component, OnInit } from '@angular/core';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }
}

*/