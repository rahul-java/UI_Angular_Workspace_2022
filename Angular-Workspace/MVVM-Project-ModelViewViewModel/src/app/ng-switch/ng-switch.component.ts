import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

  product={
    name:'iPhone 14',
    price: 139000,
    description:{
    Company : "Apple",
    Model : "iPhone 14 PRO MAX",
    ROM : "512 GB"
    },
    img:'assets/images/apple-iphone-14-pro-max.png',
    inStock:true
  }
  selectedView='preview';

  view(event:any){
  this.selectedView=event.target.name;
  }

}
