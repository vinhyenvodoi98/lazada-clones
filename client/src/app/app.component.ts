import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService} from './data.service';

// export interface User{
//   name: any;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchTerm = '';
  isCollpased = true;

  constructor(private router: Router,
              private data: DataService,
              ){
                this.data.getProfile();
              }

  ngOnInit(){
    // var name = localStorage.getItem('user')
    // console.log(name);
  }
  get token(){
    
    return localStorage.getItem('token');
  }

  
  collapse(){
    this.isCollpased = true ;
  }

  closeDropdown(dropdown){
    dropdown.close();
  }

  logout(){
    // this.data.user={};
    localStorage.clear();
    this.router.navigate(['']);
  }

  search(){
    
  }
}
