import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  btnDisabled = false;

  constructor(private router : Router,
              private rest : RestApiService,
              private data : DataService,
  ) { }

  ngOnInit() {
  }

  validate(){
    if(this.email){
      if(this.password){
        return true;
      }else{
        this.data.error('chua nhap password kia')
      }
    }else{
      this.data.error('chua nhap email kia')
    }
  }

  async login(){
    this.btnDisabled =true;
    try{
      if(this.validate()){
        const data = await this.rest.post(
          'http://localhost:3000/api/login',
          {
            email: this.email,
            password: this.password
          }
        );
        if(data['success']){
          localStorage.setItem('token',data['token']);
          
          this.router.navigate(['/']);         
        }else{
          this.data.error(data['message']);
        }
      }
    } catch(error){
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
