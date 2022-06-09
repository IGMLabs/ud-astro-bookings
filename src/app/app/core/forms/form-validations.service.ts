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
    const start = form.get('startDate')?.value;
    const end = form.get('endDate')?.value;
    if (!start || !end) {
      return {
        compareDates: 'No dates provided'
      };
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    const today = new Date();

    if (today > startDate){
      return {
        compareDates: "You can't travel to the past"
      };
    }
    if (endDate < startDate){
      return {
        compareDates: "Travel to the past it's not posible yet"
      };
    }

    return null;
  }
}
