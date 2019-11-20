import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Config } from './config';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url: string = "/assets/config.json";

  constructor(private http: HttpClient) { }

  get():Observable<Config>{
    return of({ "apiUrl": environment.apiUrl })
  }

}

