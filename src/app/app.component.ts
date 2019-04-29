import { Component , OnInit} from '@angular/core';
import { FormGroup,FormArray, FormControl , Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
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
    this.myForm.reset()
  }
  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }
  ngOnInit(){
    this.myForm = new FormGroup({
      'username': new FormControl(null, [Validators.required,this.forbiddenNamesValidator.bind(this)]),
      'email': new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmailValidator),
      'password': new FormControl(null,Validators.required),
      'gender': new FormControl('Male'),
      'question': new FormControl('book'),
      'answer': new FormControl(null),
      'hobbies': new FormArray([])
    });

    // this.myForm.statusChanges.subscribe(
    //   (status) => {console.log(status);}
    // )

    // this.myForm.valueChanges.subscribe(
    //   (values)=> {console.log(values);}
    // )

    // this.myForm.setValue()
    //this.myForm.patchValue()
  }

  forbiddenNamesValidator(control: FormControl):{[s:string]: boolean } {
    if(this.forbiddenNames.indexOf(control.value)!==-1) {
      return {'nameIsForbidden':true};
    }else{
      return null;
    }
  }
  // This is Async for Server Purposes
  forbiddenEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
