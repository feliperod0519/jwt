import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JwtModule } from '@auth0/angular-jwt';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

import { InMemoryUsersService } from '../app/inmemoryusers.service';
//import { httpInterceptorProvider } from '../app/http-interceptor.service';
import { ConfigService } from '../app/config.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryUsersService)
    /*,
    JwtModule.forRoot({
                        config: {
                          tokenGetter: ()=>{
                                              return localStorage.getItem('auth-token');
                                            },
                          whitelistedDomains: ['localhost:4200'],
                          blacklistedRoutes: []
                        }
                      })*/
  ],
  providers: [InMemoryUsersService, 
              //httpInterceptorProvider, 
              ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
