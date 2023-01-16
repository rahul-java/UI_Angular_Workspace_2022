import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  parentFormGroup:any;

  ngOnInit(): void {
    this.parentFormGroup=this.formBuilder.group({
      username:this.formBuilder.control(''),
      email:this.formBuilder.control(''),
      childFormGroup:this.formBuilder.group({
        address:this.formBuilder.control(''),
        agree:this.formBuilder.control(true)
      }),
      ImgControl:this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  get ImgControls(){
    return this.parentFormGroup.get('ImgControl') as FormArray;
  }

  AddMoreImg()
  {
    this.ImgControls.push(this.formBuilder.control(''));
  }
  RemoveImg(i:number){

    this.ImgControls.removeAt(i);
  }

//  parentFormGroup=new FormGroup({

//   username:new FormControl(''),
//   email:new FormControl(''),
//   childFormGroup:new FormGroup({
//     address:new FormControl(''),
//     agree:new FormControl(true)
//   })
  

//  });

 FormSubmit(data:any){
   alert(JSON.stringify(data));
 }

 PartialUpdate(){
  this.parentFormGroup.patchValue({
    username:"Rahul",
    childFormGroup:{
      address:"Delhi"
    }
  })
 }
}
