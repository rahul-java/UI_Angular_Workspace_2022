import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-event',
  templateUrl: './key-event.component.html',
  styleUrls: ['./key-event.component.css']
})
export class KeyEventComponent  {


 users=[
 {name:'Rahul@123'},
 {name:'Ashish@123'},
 {name:'Hardwinder$123'},
 {name:'Ankit_234'},
 {name:'Ravi#123'},
 {name:'Ram@102030'}

 ];

  userName='';
  password='';

  message='';

  isValid=false;
  isInvalid=false;
  ShowOrHide=false;

  checkUserName(){
    this.ShowOrHide=true;
    for(let user of this.users)
    {
      if(user.name==this.userName)
       {
          this.message='UserName Already Taken';
          this.isValid=false;
          this.isInvalid=true;
          break;
       }else
       {
          this.message='Available';
          this.isValid=true;
          this.isInvalid=false;
       }
       
    }
    if(this.userName=='')
    {
      this.ShowOrHide=false;
    }
   

  }

}
