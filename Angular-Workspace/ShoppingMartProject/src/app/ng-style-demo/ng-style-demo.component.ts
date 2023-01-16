import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent  {

  ColorCode='';
  TextColorCode='';
  TextAlignment='';
  objStyle={
    'background-color':'',
    'color':'',
    'text-align':''

  }
  applyEffects()
  {
    this.objStyle={

       'background-color':this.ColorCode,
       'color':this.TextColorCode,
       'text-align':this.TextAlignment

    }

  }

}
