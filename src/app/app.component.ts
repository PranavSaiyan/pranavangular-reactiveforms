import { Component , OnInit} from '@angular/core';
import { FormGroup,FormArray, FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  forbiddenNames = ['Anna','Chris'];
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
  onSubmit() {
    console.log(this.myForm);
  }
  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }
  ngOnInit(){
    this.myForm = new FormGroup({
      'username': new FormControl(null, [Validators.required,this.forbiddenNamesValidator.bind(this)]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,Validators.required),
      'gender': new FormControl('Male'),
      'question': new FormControl('book'),
      'answer': new FormControl(null),
      'hobbies': new FormArray([])
    });
  }

  forbiddenNamesValidator(control: FormControl):{[s:string]: boolean } {
    if(this.forbiddenNames.indexOf(control.value)!==-1) {
      return {'nameIsForbidden':true};
    }else{
      return null;
    }
  }
}
