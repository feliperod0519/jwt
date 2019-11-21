import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpTohttpsService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    let httpsReq = request.clone({ url: request.url.replace("http://","http://")}); //"https"
    return next.handle(httpsReq);
  }
}

