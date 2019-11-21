import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay, tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    console.log('hello intercapt');
    let fullReq: any = {"url":request.url};
    if (this.handleUrl(fullReq.url,"sandbox")){
      const loaderService = this.injector.get(LoaderService);
      loaderService.DoShow();
      console.log('hello intercapt 2');
      return next.handle(request).pipe(
                                        //tap({next:()=>{console.log('hello')}}),
                                        /*
                                        delay(1000),
                                        tap({next:()=>{loaderService.i++;}}),
                                        delay(1000),
                                        tap({next:()=>{loaderService.i++;}}),
                                        delay(1000),
                                        tap({next:()=>{loaderService.i++;}}),
                                        delay(1000),
                                        tap({next:()=>{loaderService.i++;}}),*/
                                        delay(3000),
                                        finalize(() => loaderService.DoHide())
      );
    }
    else{
      return next.handle(request);
    }
  }

  private handleUrl(url:string, criteria?:string): boolean{
      if (criteria!=null){
        if (url.includes(criteria)){
          return true;
        }
        return false;
      }
      return false;
  }

  private extractData(res: Response){
    let body = res.json;
    console.log(body);
    return body || {};
  }

  private do
}

/*
import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes("albums")) {
      return next.handle(req);
    }
    console.warn("LoaderInterceptor");

    const loaderService = this.injector.get(LoaderService);

    loaderService.show();

    return next.handle(req).pipe(
      delay(3000),
      finalize(() => loaderService.hide())
    );
  }
}

*/