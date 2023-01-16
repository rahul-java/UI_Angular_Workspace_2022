import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive-containers',
  templateUrl: './ng-if-directive-containers.component.html',
  styleUrls: ['./ng-if-directive-containers.component.css']
})
export class NgIfDirectiveContainersComponent implements OnInit {
  

  condition=true;
  thenblock :TemplateRef<any>|null=null;

  @ViewChild('firstBlock',{static:true}) firstBlock :TemplateRef<any>|null=null;
  @ViewChild('secondBlock',{static:true}) secondBlock :TemplateRef<any>|null=null;
 
  ngOnInit() {
   this.thenblock=this.firstBlock;
  // this.thenblock=this.secondBlock;
  }

  textBtn='SecondBlock';
  toggleBtn(){
    this.thenblock = this.thenblock==this.firstBlock?this.secondBlock:this.firstBlock;
    this.textBtn=(this.textBtn=='SecondBlock')?'FirstBlock':'SecondBlock';
  }

}
