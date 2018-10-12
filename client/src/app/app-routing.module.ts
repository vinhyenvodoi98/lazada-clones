import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes=[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'shop',
    loadChildren: './mailmaz/lazmall.module#LazmallModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  
]
 
@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
