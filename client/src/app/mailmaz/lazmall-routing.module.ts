import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazMallComponent }from './laz-mall/laz-mall.component';


import { AuthGuardService } from '../auth-guard.service';

const routes: Routes=[
  {
    path: ':id',
    component: LazMallComponent
  }  
]
 
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LazmallRoutingModule { }
