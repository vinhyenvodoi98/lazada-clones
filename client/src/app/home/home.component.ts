import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';

export interface LazMall{
  id : Number;
  avatar : String;
  title : String;
  text : String;
};

export interface Categorie{
  avatar : String;
  title : String; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Lazs : LazMall[]=[
    {
      id: 1,
      avatar: '../../assets/lazmall.jpg',
      title: 'Toshiba',
      text: 'Leading Innovation',
    },
    {
      id : 2,
      avatar: '../../assets/lazmall.jpg',
      title: 'Sharp',
      text: 'Be Original',
    },
    {
      id : 3,
      avatar: '../../assets/lazmall.jpg',
      title: 'Innisfree',
      text: 'Natural benefits',
    },
    {
      id : 4,
      avatar: '../../assets/lazmall.jpg',
      title: 'Bose',
      text: 'Better Sound',
    },
    {
      id : 5,
      avatar: '../../assets/lazmall.jpg',
      title: 'Bitis',
      text: 'Official Store',
    },
    {
      id : 6,
      avatar: '../../assets/lazmall.jpg',
      title: 'MamyPoko',
      text: 'cửa hàng chính hãng',
    }
  ]

  Categories : Categorie[] =[
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Mobiles',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: "Men's T-Shirts",
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: "Women's T-Shirts",
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Mobile Phone Cases',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Baby Disposable Diapers',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Men Fashion Watches',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
    {
      avatar: '../../assets/apple-iphone-7-32gb-gold-0205-23184812-820cd52af3666551aba86e8e9f377315.jpg_80x80Q100.jpg',
      title: 'Toshiba',
    },
  ]

  constructor(private data :DataService,
              private router:Router) { }
  
  ngOnInit() {
    this.getLazMall();
    console.log(this.Lazs);
  }

  on_Lazmall(id){
    this.router.navigate(['shop/:'+id]);
  }

  getLazMall(){
    // this.Lazs=this.data.getLazmall().subcribe();
  }
}
