import { Component, OnInit } from '@angular/core';
import { ValidationErrors, Validators,FormGroup,FormControl,FormBuilder, AbstractControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

export class ContactForm implements OnInit{
public form: FormGroup;

constructor(formBuilder: FormBuilder) {
  this.form= formBuilder.group({
    name:  new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:  new FormControl('',[Validators.required,Validators.minLength(2)]),
    message:  new FormControl('',[Validators.required,Validators.minLength(2)]),
    password:  new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(4)]),
    confirmPassword:  new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4)]),
    acceptTerms: new FormControl(false,[Validators.requiredTrue]),
    },{
      validators: [this.passwordMatch]
    }

    );
}

private passwordMatch(): ValidationErrors | null
{
const password= this.form.get('password');
const confirmPassword= this.form.get('confirmPassword');
if(!password || !confirmPassword){
  return{
    passwordMatch: 'No passwords provided',
  }
}
if(password.value !==confirmPassword.value){
  return{
    passwordMatch: 'password dont match',
  }
}
return null;
}
  ngOnInit(): void {  }

public hasError(controlName: string){
  const control = this.getControl('controlName');
  if(!control) return false;
return control.invalid;
}

public getPasswordMatchMessage(){
  const errors = this.form.errors;
  if(!errors) return '';
  if(errors['passordMatch'] )  return errors[ 'passordMatch']);
  return '';
}
public mustShowMessage (controlName: string): boolean{
  const control = this.getControl(controlName);
  if(!control) return false;
  return control.touched && control.invalid;
}

public getErrorMessage (controlName: string): string {
  const control = this.getControl(controlName);
  if(!control) return '';
  if(!control.errors) return '';
  const errors = control.errors;
  let errorMessage= '';
  errorMessage += errors['required']? '🔥 Field is required': '';
  errorMessage += errors['email']? '🔥 Show be a email address': '';
  errorMessage += errors['minlength']? `🔥 Nore than $(errors['minlength'].requiredLength) chars` : '';
  errorMessage += errors['maxlength']? `🔥 Nore than $(errors['maxlength'].requiredLength) chars` : '';
  return errorMessage;
}
public getControl(controlName : string) : AbstractControl | null{
return this.form.get(controlName);
}
  public onSave(){
  const {name,email,passord }= this.form.value;
  const register= {name,email,passord };
  console.warn('Send contact message', register);
}

}
