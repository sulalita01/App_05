import { state } from '@angular/animations';
import { DetailPage } from './../detail/detail.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail:NavController) {}
  items=[
    {
      id: 1,
      Name: 'Product A',
      Price: 200,
      Detail:'this is a Product A',
      ImageURL: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
    },

    {
      id: 2,
      Name: 'Product B',
      Price: 250,
      Detail:'this is a Product B',
      ImageURL: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=99ac&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    },

    {
      id: 3,
      Name: 'Product c',
      Price: 300,
      Detail:'this is a Product c',
      ImageURL: 'https://m.media-amazon.com/images/I/71qKfFqgEiL.jpg',
    },

    {
      id: 3,
      Name: 'Product D',
      Price: 400,
      Detail:'this is a Product D',
      ImageURL: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-5-Sage:VP2-859x540',
    },
  ]
  gotoDetail(i:any){
    this.detail.navigateForward ('/detail',{state: {i}})
  }

}




