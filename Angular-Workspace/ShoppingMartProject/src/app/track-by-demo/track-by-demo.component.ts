import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by-demo',
  templateUrl: './track-by-demo.component.html',
  styleUrls: ['./track-by-demo.component.css']
})
export class TrackByDemoComponent  {

  Products=[
    {name:'Laptop', price:61999,img:'assets/images/hp-laptop.png',likes:0,dislikes:0},
    {name:'TV', price:29990,img:'assets/images/samsung-tv.png',likes:0,dislikes:0},
    {name:'Speaker', price:24990,img:'assets/images/speaker.png',likes:0,dislikes:0}
    ];
    
    AddNewProduct(){
        this.Products=[
   {name:'Laptop', price:61999,img:'assets/images/hp-laptop.png',likes:0,dislikes:0},
   {name:'TV', price:29990,img:'assets/images/samsung-tv.png',likes:0,dislikes:0},
   {name:'Speaker', price:24990,img:'assets/images/speaker.png',likes:0,dislikes:0},
   {name:'Refrigerator', price:98800,img:'assets/images/refrigerator.png',likes:0,dislikes:0},
   {name:'Camera', price:168000,img:'assets/images/camera.png',likes:0,dislikes:0}
        ]
    }
    ChangeTrackBy(index:number){
        return index;
    }

}
