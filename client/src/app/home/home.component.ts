import { Component, OnInit } from '@angular/core';

export interface LazMall{
  avatar : String;
  title : String;
  text : String;
}

const Lazs : LazMall[]=[
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'Toshiba',
    text: 'Leading Innovation',
  },
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'Sharp',
    text: 'Be Original',
  },
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'Innisfree',
    text: 'Natural benefits',
  },
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'Bose',
    text: 'Better Sound',
  },
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'Bitis',
    text: 'Official Store',
  },
  {
    avatar: '../../assets/lazmall.jpg',
    title: 'MamyPoko',
    text: 'cửa hàng chính hãng',
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    console.log(Lazs);
  }

}
