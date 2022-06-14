import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormMessagesService {

  constructor() { }

  public hasError(form:FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.invalid;
  }

  private getControl(form:FormGroup, controlName: string): AbstractControl | null {
    return form.get(controlName);
  }

  public mustShowMessage(form: FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(form: FormGroup, controlName: string): string {
    const control = this.getControl(form, controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['minlength'] ? `🔥 More than ${errors['minlength'].requiredLength} chars`: ' ';
    errorMessage += errors['maxlength'] ? `🔥 Less than ${errors['maxlength'].requiredLength} chars`: ' ';
    errorMessage += errors['max'] ? `🔥 Less than ${errors['max'].max} `: ' ';
    errorMessage += errors['min'] ? `🔥 More than ${errors['min'].min} `: ' ';
    return errorMessage;
  }

  public getDatesMessage(form: FormGroup) {
    const errors = form.errors;
    if (!errors) return '';
    if (errors['compareDates']) return errors['compareDates'];
    return;
  }

  public getPasswordMatchMessage(form: FormGroup) {
    const errors = form.errors;
    if (!errors) return '';
    if (errors['passowrdMatch']) return errors['passwordMatch'];
    return;
  }
}
