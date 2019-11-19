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
  providers: [InMemoryUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  
  ],
  declarations: [ AppComponent ],
  providers:    [ InMemoryDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }

*/