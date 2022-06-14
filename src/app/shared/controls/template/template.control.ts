import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';

@Component({
  selector: 'app-template-control',
  templateUrl: './template.control.html',
  styleUrls: ['./template.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateControl),
      multi: true
    }
  ]
})
export class TemplateControl implements OnInit {

  @Input() public form!: FormGroup;
  @Input() public formControlName: string = '';
  @Input() public inputType: string = 'text';
  @Input() public label: string = 'Enter data';
  @Input() public placeholder: string = '...';

  public touchedCallback: any;
  public changeCallback: any;
  public value: any;

  constructor(private fms: FormMessagesService) {;
  }

  public onKeyUp(event: any){
    const controlValue = event.target.value;
    this.value = controlValue;
    this.changeCallback(this.value);
    this.touchedCallback();
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(changeCallback: any): void {
    this.changeCallback = changeCallback;
  }
  registerOnTouched(touchedCallback: any): void {
    this.touchedCallback = touchedCallback;
  }

  ngOnInit(): void {
  }

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }
}
