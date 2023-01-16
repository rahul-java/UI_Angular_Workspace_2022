import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-and-dislikes',
  templateUrl: './likes-and-dislikes.component.html',
  styleUrls: ['./likes-and-dislikes.component.css']
})
export class LikesAndDislikesComponent {


  Products=[
   {name:'Laptop', price:61999,img:'assets/images/hp-laptop.png',likes:0,dislikes:0},
   {name:'TV', price:29990,img:'assets/images/samsung-tv.png',likes:0,dislikes:0},
   {name:'Speaker', price:24990,img:'assets/images/speaker.png',likes:0,dislikes:0},
   {name:'Refrigerator', price:98800,img:'assets/images/refrigerator.png',likes:0,dislikes:0},
   {name:'Camera', price:168000,img:'assets/images/camera.png',likes:0,dislikes:0},
   {name:'iPhone', price:134000,img:'assets/images/iphone-14.png', likes:0,dislikes:0},
   {name:'Samsung', price:119999,img:'assets/images/samsung-z-fold.png',likes:0,dislikes:0},
   {name:'OnePlus', price:61999,img:'assets/images/oneplus.png',likes:0,dislikes:0},
   {name:'Vivo', price:36999,img:'assets/images/vivo.png',likes:0,dislikes:0},
   {name:'Oppo', price:28999,img:'assets/images/oppo.png',likes:0,dislikes:0},
   {name:'Jeans', price:1099,img:'assets/images/jeans.png',likes:0,dislikes:0},
   {name:'T-Shirt', price:599,img:'assets/images/tshirt.png',likes:0,dislikes:0},
   {name:'Trousers', price:1299,img:'assets/images/trousers.png',likes:0,dislikes:0},
   {name:'Jacket', price:2999,img:'assets/images/jacket.png',likes:0,dislikes:0}
  ];

  OnLikes(item:any){
    item.likes++;
  }

  OnDislikes(item:any){
    item.dislikes++;
  }

}
