import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UtilitiesService } from 'src/app/core/utils/utilities.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { IdName } from 'src/app/core/api/id-name.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  @Input() public ranges: IdName[] = [];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Agency>();

  constructor(formBuilder: FormBuilder, fms: FormMessagesService, private us: UtilitiesService, idName: IdNameApi) {
    super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }


  public onSubmitClick(){
    const {name, range, status} = this.form.value;
    const id = this.us.getDashId(name);
    const newAgencyData = { id, name, range, status};
    console.warn('Send agency data ', newAgencyData)
    this.save.emit(newAgencyData);
  }

  ngOnInit(): void {}
}
