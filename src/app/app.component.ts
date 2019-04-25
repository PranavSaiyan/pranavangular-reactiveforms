import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  genders = ['Male','Female','Others'];
  answer = '';
  formUser = { 
    name : '',
    email:'',
    password:'',
    gender:'',
    answer:''
  };

  ngOnInit(){
    this.myForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'gender': new FormControl('Male'),
      'list': new FormControl('book'),
      'answer': new FormControl(null)
    });
  }
}
