import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-mart',
  templateUrl: './shopping-mart.component.html',
  styleUrls: ['./shopping-mart.component.css']
})
export class ShoppingMartComponent {

  category=['Select Category','Electronics','Mobiles','Fashion'];
  electronics=['Select Electronics','Laptop','TV','Speaker','Refrigerator','Camera'];
  mobiles=['Select Mobiles','iPhone','Samsung','OnePlus','Vivo','Oppo'];
  fashion=['Select Fashion','Jeans','T-Shirt','Trousers','Jacket'];

 selectedCategory='Select Category';
 selectedProduct:any='Select Product';
 
 searchProduct:any={
  name:'',
  price:0,
  img:''
 }

cartItems:any=[];
cartItemCount=0;
getCount(){
  this.cartItemCount=this.cartItems.length;
}
 Product=[''];
 
 data=[
  {name:'Laptop', price:61999,img:'assets/images/hp-laptop.png'},
  {name:'TV', price:29990,img:'assets/images/samsung-tv.png'},
  {name:'Speaker', price:24990,img:'assets/images/speaker.png'},
  {name:'Refrigerator', price:98800,img:'assets/images/refrigerator.png'},
  {name:'Camera', price:168000,img:'assets/images/camera.png'},
  {name:'iPhone', price:134000,img:'assets/images/iphone-14.png'},
  {name:'Samsung', price:119999,img:'assets/images/samsung-z-fold.png'},
  {name:'OnePlus', price:61999,img:'assets/images/oneplus.png'},
  {name:'Vivo', price:36999,img:'assets/images/vivo.png'},
  {name:'Oppo', price:28999,img:'assets/images/oppo.png'},
  {name:'Jeans', price:1099,img:'assets/images/jeans.png'},
  {name:'T-Shirt', price:599,img:'assets/images/tshirt.png'},
  {name:'Trousers', price:1299,img:'assets/images/trousers.png'},
  {name:'Jacket', price:2999,img:'assets/images/jacket.png'}
 ];
  OnCategoryChange(){

    switch(this.selectedCategory){
      case 'Electronics': this.Product=this.electronics ;
                          break;
      case 'Mobiles'    : this.Product=this.mobiles ;
                          break;  
      case 'Fashion'    : this.Product=this.fashion ;
                          break;  
      default : this.Product=['Select Any Category'];    
                          break;                                
    }

  }

  OnProductChange(){
    this.searchProduct=this.data.find(i=>i.name==this.selectedProduct)
  }
  OnAddToCart(){
  this.cartItems.push(this.searchProduct);
  this.getCount();
  }

  isVisibleCartItems=false;
  OnToggleCartBtn(){
    this.isVisibleCartItems=this.isVisibleCartItems==false?true:false;
  }

  OnRemoveItems(i:number){
    this.cartItems.splice(i,1);
    this.getCount();
  }
}
