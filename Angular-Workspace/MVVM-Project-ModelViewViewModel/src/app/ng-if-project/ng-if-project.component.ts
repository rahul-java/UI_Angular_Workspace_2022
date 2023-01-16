import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-if-project',
  templateUrl: './ng-if-project.component.html',
  styleUrls: ['./ng-if-project.component.css']
})
export class NgIfProjectComponent implements OnInit {

  

  isPresent=true;
  thenBlock :TemplateRef<any>|null=null;

  @ViewChild('Details',{static:true}) Details :TemplateRef<any>|null=null;
  @ViewChild('Preview',{static:true}) Preview :TemplateRef<any>|null=null;
 
  ngOnInit() {
   this.thenBlock=this.Details;
  // this.thenBlock=this.Preview;
  }

  textBtn='Preview';
  toggleBtn(){
    this.thenBlock = this.thenBlock==this.Details?this.Preview:this.Details;
    this.textBtn=(this.textBtn=='Preview')?'Details':'Preview';
  }

}
