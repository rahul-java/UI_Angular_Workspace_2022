import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiDirectionalProject';

  name='';
  price=0;
  shippedTo='--SELECT--';
  inStock=false;

  product={
    name:'',
    price:0,
    shippedTo:'',
    inStock:false
  }

  onUpdateBtnClick(){
    this.product={

      name:this.name,
      price:this.price,
      shippedTo:this.shippedTo,
      inStock:this.inStock

    }
  }
}
