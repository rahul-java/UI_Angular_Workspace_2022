import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-input',
  templateUrl: './td-input.component.html',
  styleUrls: ['./td-input.component.css']
})
export class TdInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userRegData(data:any)
  {

    alert(JSON.stringify(data));
  }
isInvalid:boolean=true;
  OnCountryChange(event:any)
  {
    if(event.target.value=='-1')
    {
      this.isInvalid=true;
    }
    else
    {
      this.isInvalid=false;
    }
  }
}
