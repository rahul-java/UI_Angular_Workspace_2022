import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
    name='HP';
    price=70000;
    isAvailable=false;

 updateproduct={
    name:'',
    price:0,
    isAvailable:false
  }

  OnClick(){
    this.updateproduct={
      name:this.name,
      price:this.price,
      isAvailable:this.isAvailable
    }
  }

}
