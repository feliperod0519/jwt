import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { HttpRequest, HttpResponse, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User, LoginUser } from '../app/user';


const passwords: any[] = [{id:1, password:"hello1"},{id:2, password:"hello2"},
                          {id:3, password:"hello3"},{id:4, password:"hello4"}];
    


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {//implements HttpInterceptor {

  constructor(private apiService: ApiService) { }

  /*
  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

  }*/
}

export let httpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true
};



/*

const authToken = this.auth.getAuthorizationToken();

    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);

*/

/*

import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          this.messenger.add(msg);
        })
      );
  }
}


*/


/*
    const { id, password } = request.body;
    if (request.url.toLowerCase().endsWith('users/authenticate') && request.method === 'POST'){
      this.apiService.getUsers().subscribe((data:User[])=>{
                                                              const u : User = data.find(u=>u.id === id);
                                                              if (u!=null)
                                                              {
                                                                const pwd = passwords.find(q=>q.id === u.id);
                                                                if (pwd.password === password){
                                                                  return of(new HttpResponse({status:200, body:{ 
                                                                                                                  id: u.id,
                                                                                                                  email: u.email,
                                                                                                                  name: u.name,
                                                                                                                  token:"jwt-TEST" 
                                                                                                                }
                                                                                              })).pipe(materialize()).pipe(delay(1000)).pipe(dematerialize());
                                                                }
                                                                else{
                                                                  return throwError({ error: 'Not a good password. Sorry!'  }).pipe(materialize())
                                                                                                                              .pipe(delay(1000)).pipe(dematerialize());
                                                                }
                                                              }
                                                              else{
                                                                return throwError({ error: 'Not a good user/password. Sorry!'  }).pipe(materialize())
                                                                                                                                 .pipe(delay(1000)).pipe(dematerialize());
                                                              }

                                                          });                                                         
    }
    else if (request.url.toLowerCase().endsWith('users') && request.method === 'GET'){
      let users : User[] = [];
      this.apiService.getUsers().subscribe((data:User[])=>{
                                                            users = data;
                                                          });
      return of(new HttpResponse({ status: 200, body: users})).pipe(materialize())
                                                              .pipe(delay(1000)).pipe(dematerialize());
    }
    return next.handle(request).pipe(materialize())
                               .pipe(delay(1000)).pipe(dematerialize());


    */
