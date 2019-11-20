import { Component, OnInit } from '@angular/core';

import { User, LoginUser } from '../user';
import { ApiService } from '../api.service';

import { of } from 'rxjs';
import { materialize, map, tap} from 'rxjs/operators';

import { Config } from '../config';
import { environment } from '../../environments/environment';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: User[] = [];
  private Url = 'api/users';

  constructor(private api: ApiService,
              private config: ConfigService) { }

  ngOnInit() {
    if (!environment.production)
    {
       this.showConfig();
    }
    this.api.getUsers().subscribe((data:User[])=>{
                                                    this.users= data;
                                                    console.log(this.users);
                                                 });
    this.testMaterialize();                              
  }

  showConfig(){
    console.log("CONFIG IN DEV MODE");
    this.config.get().subscribe({
                                  next(x:Config){ console.log(x); },
                                  error(e:any){ console.log(e);}
                                });
    console.log("END CONFIG IN DEV MODE");
  }

  testMaterialize(){
    const materialized = of<any>('a','b',13,'d').pipe((i:any)=>i).pipe(materialize()).subscribe(x=>console.log(x));
    /*
    Angular is running in the development mode. Call enableProdMode() to enable the production mode.
    home.component.ts:30 Notificationerror: undefinedhasValue: truekind: "N"value: "a"__proto__: Object
    home.component.ts:30 Notificationerror: undefinedhasValue: truekind: "N"value: "b"__proto__: Objectaccept: ƒ accept(nextOrObserver, error, complete)constructor: class Notificationdo: ƒ do(next, error, complete)observe: ƒ observe(observer)toObservable: ƒ toObservable()__proto__: Object
    home.component.ts:30 Notificationerror: undefinedhasValue: truekind: "N"value: 13__proto__: Object
    home.component.ts:30 Notificationerror: undefinedhasValue: truekind: "N"value: "d"__proto__: Object
    home.component.ts:30 Notificationerror: undefinedhasValue: falsekind: "C"value: undefined__proto__: Object
    */
  }
}

