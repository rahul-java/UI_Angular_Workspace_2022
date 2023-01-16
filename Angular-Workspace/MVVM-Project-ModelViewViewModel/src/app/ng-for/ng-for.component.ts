import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

navItems=['Samsung','LG','Sony','Vivo','Oppo','OnePlus'];
navMenu=[
  {Category:'Fashion',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'TV',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'Mobile',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'Smart-Watches',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'Laptop',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'Sports',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']},
  {Category:'Electronics',Product:['Samsung','LG','Sony','Vivo','Oppo','OnePlus']}
];

}
