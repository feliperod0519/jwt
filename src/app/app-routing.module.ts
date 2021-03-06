import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [  
                          
                          { path: 'home', component: HomeComponent },
                          { path: 'login', component: LoginComponent },
                          { path: 'logout/:id', component: LogoutComponent },
                          { path: 'sandbox', component: SandboxComponent },
                          { path: '', redirectTo:'/home', pathMatch:'full' }                                                
                       ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
