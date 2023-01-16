import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {

  Device={
    id:101,
    name:"Mobile",
    cost:50000,
    inStock:false,
    disableBtn:true
  }
  

}
