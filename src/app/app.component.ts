import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  genders = ['Male','Female','Others'];
  answer = '';
  formUser = { 
    name : '',
    email:'',
    password:'',
    gender:''
    ,answer:''
  };
}
