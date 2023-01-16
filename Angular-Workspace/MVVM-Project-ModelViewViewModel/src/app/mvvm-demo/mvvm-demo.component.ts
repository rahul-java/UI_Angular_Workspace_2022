import { Component } from '@angular/core';

@Component({
  selector: 'app-mvvm-demo',
  template: `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
    
</head>
<body>
    
<div class="container mt-5">
    <form action="save">
        <dt>UserName</dt> <input ngModel #userName="ngModel" type="text" name="userName" />
        <dt>Email</dt><input ngModel #email="ngModel" type="text" name="email" />

       <div class="mt-3">
        <button class="btn btn-primary">submit</button>
       </div>
    </form>

<div>
    <dl>
        <dt>Name</dt>
        <dd>{{userName.value}}</dd>


        <dt>Email</dt>
        <dd>{{email.value}}</dd>
    </dl>
</div>
</div>
</body>
</html>

  `,
  styleUrls: ['./mvvm-demo.component.css']
})
export class MvvmDemoComponent {

  

}
