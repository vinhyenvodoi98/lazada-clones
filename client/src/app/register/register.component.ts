import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  password1 = '';
  isSeller = false;

  btnDisabled = false

  constructor(private router: Router,
              private data: DataService,
              private rest: AppService) { }

  ngOnInit() {
  }

  validate(){
    if(this.name){
      if(this.email){
        if(this.password){
          if(this.password1){
            if(this.password === this.password1){
              return true;
            }else{
              this.data.error('pass ko giong nhau kia')
            }
          }else{
            this.data.error('chua dien xac nhan pass kia');
          }
        }else{
          this.data.error('chua dien pass kia')
        }
      }else{
        this.data.error('chua dien mail kia');
      }
    }else{
      this.data.error('chua dien ten kia');
    }
  }

  async register(){
    this.btnDisabled = true;
    try{
      if(this.validate()){
        const data = await this.rest.post(
          'http://localhost:3000/api/register',
          {
            name: this.name,
            email: this.email,
            password: this.password,
            isSeller: this.isSeller
          }
        );
        if(data['success']){
          localStorage.setItem('token', data['token']);
          this.data.success('Registration Successfull');
          await this.data.getProfile();
        }else{
          this.data.error(data['message']);
        }
      }
    }catch(error){
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
