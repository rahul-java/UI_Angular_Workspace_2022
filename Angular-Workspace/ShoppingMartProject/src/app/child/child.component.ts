import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

@Input()
 msg='';

 sendMsg='Hello Friends';
  
 @Output()
 sendDataToParent:EventEmitter<string>=new EventEmitter<string>();

 sendDataMethod()
 {
  this.sendDataToParent.emit(this.sendMsg);
 }
}
