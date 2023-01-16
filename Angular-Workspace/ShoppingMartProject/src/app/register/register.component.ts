import { Component, OnInit } from '@angular/core';
import { RandomNumGenService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private randomNumGenService:RandomNumGenService) { }
  
  rnCode:String=this.randomNumGenService.RandomNumGenCode();
  refreshCode(){
    this.rnCode=this.randomNumGenService.RandomNumGenCode();
  }

  ngOnInit(): void {
    
  }

 

}
