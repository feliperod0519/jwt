import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTohttpsService } from './http-tohttps.service';
import { LoaderInterceptorService } from './loader-interceptor.service';

export const providerIndex = [
  
  { provide: HTTP_INTERCEPTORS, useClass: HttpTohttpsService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  /*
  { provide: HTTP_INTERCEPTORS, useClass: ConvertInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ProfilerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true }
  */
];