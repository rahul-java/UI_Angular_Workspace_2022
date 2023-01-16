import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent  {

  Product={

    name:'Apple-iPhone',
    price:139000,
    img:'assets/images/apple-iphone-14-pro-max.png'

  }
  isImgVisible=false;
  textBtn='Show';
  toggleImg(){
    this.isImgVisible=(this.isImgVisible==false)?true:false;
    this.textBtn=(this.textBtn=='Show')?'Hide':'Show';
  }
}
