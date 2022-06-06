import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {


  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    }, {
      validators: [this.passwordMatch]
    });
  }

  private passwordMatch(form: AbstractControl) : ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMarch: 'No passwords provided'
      };
    }
    if (password.value !== confirmPassword.value){
      return {
        passwordMarch: "Passwords don't mactch"
      };
    }
    return null;
  }

  public hasError(controlName: string):boolean {
    const control = this.getControl(controlName);
    if (!control) return false
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false
    return control.touched && control.invalid;
  }

  public getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required' : '' ;
    errorMessage += errors['email'] ? '🔥 Field is required' : '' ;
    errorMessage += errors['minlength'] ? `🔥 More than ${errors['minlength'].requiredLength} chars` : '' ;
    errorMessage += errors['maxlength'] ? `🔥 Less than ${errors['maxlength'].requiredLength} chars` : '' ;
    return errorMessage;
  }

  public getPasswordMatchMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['passowrdMatch']) return errors['passwordMatch'];
    return;
  }

  public onSave() {
    const {name, email, password} = this.form.value;
    const register = {name, email, password};
    console.warn('Send Register', register);
  }


  ngOnInit(): void {
  }
}

