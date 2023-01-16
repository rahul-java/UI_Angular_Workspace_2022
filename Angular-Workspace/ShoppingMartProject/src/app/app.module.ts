import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingMartComponent } from './shopping-mart/shopping-mart.component';
import { LikesAndDislikesComponent } from './likes-and-dislikes/likes-and-dislikes.component';
import { TrackByDemoComponent } from './track-by-demo/track-by-demo.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';
import { KeyEventComponent } from './key-event/key-event.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TdFormComponent } from './td-form/td-form.component';
import { TdInputComponent } from './td-input/td-input.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRegisterServiceComponent } from './user-register-service/user-register-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingMartComponent,
    LikesAndDislikesComponent,
    TrackByDemoComponent,
    AttributeDirectiveComponent,
    NgStyleDemoComponent,
    KeyEventComponent,
    ChildComponent,
    ParentComponent,
    TdFormComponent,
    TdInputComponent,
    ReactiveFormComponent,
    RegisterComponent,
    UserRegisterServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
