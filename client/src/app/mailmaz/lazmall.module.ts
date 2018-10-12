import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazmallRoutingModule } from './lazmall-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LazMallComponent } from './laz-mall/laz-mall.component';

import { AppService } from '../app.service';
import { DataService } from '../data.service';
import { AuthGuardService } from '../auth-guard.service';
import { RestApiService } from '../rest-api.service';


@NgModule({
  declarations: [
    LazMallComponent
  ],
  imports: [
    CommonModule,
    LazmallRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [AppService,DataService,AuthGuardService,RestApiService],
  bootstrap: [LazMallComponent]
})
export class LazmallModule { }
