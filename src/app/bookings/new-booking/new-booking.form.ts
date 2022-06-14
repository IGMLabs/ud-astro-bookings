import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from '../../core/api/trip.interface';
import { Booking } from '../../core/api/booking.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from '../../core/forms/form.base';
import { UtilitiesService } from 'src/app/core/utils/utilities.service';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
// public start_date = 0;

@Input() public trips: Trip[] = [] ;
@Output() public save = new EventEmitter<Booking>();

constructor(formBuilder: FormBuilder, fms: FormMessagesService, private us: UtilitiesService) {

  // Form base
  super(fms);


  this.form = formBuilder.group({
    tripId: new FormControl('', [Validators.required]),
    passengerName: new FormControl('', [Validators.required]),
    date: new FormControl(new Date().toLocaleDateString('en-US')),
    luggageKilos: new FormControl('', [Validators.required, Validators.min(2), Validators.max(20)]),
    hasPremiumFoodPrice: new FormControl(false),

  });
}

public onSubmitClick() {
  const { tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice } = this.form.value;
  const id = this.us.getDashId(tripId + "-" + passengerName);
  const newBookingData = { id, tripId,passengerName, date, luggageKilos, hasPremiumFoodPrice };

  this.save.emit(newBookingData);

}

ngOnInit(): void { }
}

