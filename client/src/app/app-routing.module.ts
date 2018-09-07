import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes=[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '/register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
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
