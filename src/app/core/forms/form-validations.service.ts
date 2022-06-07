import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  public passwordMatch(form: AbstractControl) : ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMatch: 'No passwords provided'
      };
    }
    if (password.value !== confirmPassword.value){
      return {
        passwordMatch: "Passwords don't mactch"
      };
    }
    return null;
  }

  public compareDates(form: AbstractControl) : ValidationErrors | null {
    const start = form.get('start_date')?.value;
    const end = form.get('end_date')?.value;
    if (!start || !end) {
      return {
        compareDates: 'No dates provided'
      };
    }
    const start_date = new Date(start);
    const end_date = new Date(end);
    const today = new Date();

    if (today > start_date){
      return {
        compareDates: "You can't travel to the past"
      };
    }
    if (end_date < start_date){
      return {
        compareDates: "Travel to the past it's not posible yet"
      };
    }

    return null;
  }
}
