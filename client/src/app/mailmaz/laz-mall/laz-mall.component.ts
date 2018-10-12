import { Component, OnInit } from '@angular/core';


export interface LazMall{
  id : Number;
  avatar : String;
  title : String;
  text : String;
};

@Component({
  selector: 'app-laz-mall',
  templateUrl: './laz-mall.component.html',
  styleUrls: ['./laz-mall.component.css']
})

export class LazMallComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

}
