import { Component, OnInit } from '@angular/core';
import { UserRegService } from '../service/user-reg.service';

@Component({
  selector: 'app-user-register-service',
  templateUrl: './user-register-service.component.html',
  styleUrls: ['./user-register-service.component.css']
})
export class UserRegisterServiceComponent implements OnInit {

  constructor(private userService:UserRegService) { }

  Employee:string[]=[];
  ngOnInit(): void {
    this.userService.GetEmployee().subscribe(data=>{this.Employee=data});
  }

}
