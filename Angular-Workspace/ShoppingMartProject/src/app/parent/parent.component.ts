import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

wishMessage='Good Morning Guys !';

receivedMsg='';

getDataFromChild(e:string){

  this.receivedMsg=e;
}
}
