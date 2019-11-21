import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../interceptors/loader.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  response: Observable<any>;
  i: number = 0;

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  ngOnInit() {
  }

  requestSSL(){
    console.log("helloSSL");
    const url = "http://localhost:4200/home";
    
    this.response = this.http.get(url);

    console.log(this.response);
    console.log("EndSSL");
  }

  requestLoading(){
    console.log("helloLoading");
    const url = "http://localhost:4200/sandbox";
    this.http.get(url).subscribe(r=>{
                                      this.i=this.loaderService.i;
                                    });
    console.log("EndLoading");
    
  }

}


/*

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  template: `
    <h3>Response</h3>
    <pre>{{ response | async | json }}</pre>
    <button mat-raised-button color="primary" (click)="request()">
      Run
    </button>
  `
})
export class HttpsComponent {
  response: Observable<any>;

  constructor(private http: HttpClient) {}

  request() {
    const url = "http://jsonplaceholder.typicode.com/todos/1";
    this.response = this.http.get(url);
  }
}




*/