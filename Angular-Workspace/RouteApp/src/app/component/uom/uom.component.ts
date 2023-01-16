import { Component, OnInit } from '@angular/core';
import { Uom } from 'src/app/model/uom';
import { UomService } from 'src/app/services/uom.service';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UomComponent implements OnInit {

  uomData:Uom[]=[];
  constructor(private uomService:UomService) { }

  ngOnInit(): void {
    this.uomService.getAllUom().subscribe(
      data=>{
           this.uomData=data;
      }
    );
  }

}
