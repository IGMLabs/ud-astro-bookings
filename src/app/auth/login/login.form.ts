import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {

  public form: FormGroup;

  constructor(formBuilder: FormBuilder, public fms: FormMessagesService) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    });
  }


  public hasError(controlName: string):boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }


  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  public onSave() {
    const {email, password} = this.form.value;
    const login = {email, password};
    console.warn('Send Login', login);
  }


  ngOnInit(): void {
  }

}
