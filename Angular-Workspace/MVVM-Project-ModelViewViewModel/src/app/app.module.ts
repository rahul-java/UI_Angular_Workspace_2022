import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MvvmDemoComponent } from './mvvm-demo/mvvm-demo.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgIfDirectiveContainersComponent } from './ng-if-directive-containers/ng-if-directive-containers.component';
import { NgIfProjectComponent } from './ng-if-project/ng-if-project.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    MvvmDemoComponent,
    NgIfDirectiveComponent,
    NgIfDirectiveContainersComponent,
    NgIfProjectComponent,
    NgSwitchComponent,
    NgForComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [NgForComponent]
})
export class AppModule { 
  
}
